---
schema: wang-person/v1
id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
status: active
merged_into: null
display_name: 王應橫
cbdb_id: 326285
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_opN1Xv81mFYWs1Lwyvr8JK
        subject_person_id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應橫，史料所见人物。本项目依据《中国历代人物传记资料库：王應橫（CBDB 326285）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Xcnn6abwRuDbkML-9-KtTz
          claim_id: c_opN1Xv81mFYWs1Lwyvr8JK
          source_id: s_nnWshiyf1dPh4777iF7u8r
          stance: supports
          locator: CBDB:326285
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nnWshiyf1dPh4777iF7u8r
            source_type: api_record
            title: 中国历代人物传记资料库：王應橫（CBDB 326285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326285&o=json
            external_identifier: CBDB:326285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4pmn5rW4wKHsXr4iGsMCSe
        subject_person_id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應橫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bK1iZnEkAmybJE8W8KGDr1
          claim_id: c_4pmn5rW4wKHsXr4iGsMCSe
          source_id: s_nnWshiyf1dPh4777iF7u8r
          stance: supports
          locator: CBDB:326285
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OrlYheuF-OPpzfzx0jlq_B
        subject_person_id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H6ADXcsddQz8PL3XHF26HH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oH-NEioyuGU54uNYBSRFUn
          claim_id: c_OrlYheuF-OPpzfzx0jlq_B
          source_id: s_QgZuGLFmuV1PCvKdFnt51y
          stance: supports
          locator: 天順八年進士登科錄:一卷，第二甲第二十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QgZuGLFmuV1PCvKdFnt51y
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 126898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126898&o=json
            external_identifier: CBDB:126898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H6ADXcsddQz8PL3XHF26HH
        status: active
        display_name: 王讓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應橫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應橫，史料所见人物。本项目依据《中国历代人物传记资料库：王應橫（CBDB 326285）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王應橫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_H6ADXcsddQz8PL3XHF26HH | 王讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王讓（CBDB 126898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126898&o=json)
- [中国历代人物传记资料库：王應橫（CBDB 326285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326285&o=json)
