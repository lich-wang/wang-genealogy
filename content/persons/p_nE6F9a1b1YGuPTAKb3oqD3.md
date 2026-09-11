---
schema: wang-person/v1
id: p_nE6F9a1b1YGuPTAKb3oqD3
status: active
merged_into: null
display_name: 郝懿行
revision: 1
cbdb_id: 30309
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nLHAqSy0q2eobf7LlN46WE
        subject_person_id: p_nE6F9a1b1YGuPTAKb3oqD3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郝懿行（1755—1823），清人物。明清進士進士，籍贯棲霞，身份为小學家－訓詁學、農學家，入仕進士。（中国历代人物传记资料库 CBDB 30309）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nN9ja6pC9vyQfh_xwtoBIu
          claim_id: c_nLHAqSy0q2eobf7LlN46WE
          source_id: s_2HPXvd2wZtDzmF7WGmH1bD
          stance: supports
          locator: CBDB:30309
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2HPXvd2wZtDzmF7WGmH1bD
            source_type: api_record
            title: 中国历代人物传记资料库：郝懿行（CBDB 30309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30309&o=json
            external_identifier: CBDB:30309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zo5TqeUPDg4JUgfFZznotA
        subject_person_id: p_nE6F9a1b1YGuPTAKb3oqD3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郝懿行
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y9jDGiBZGKP-KdjsBLXG5v
          claim_id: c_Zo5TqeUPDg4JUgfFZznotA
          source_id: s_2HPXvd2wZtDzmF7WGmH1bD
          stance: supports
          locator: CBDB:30309
          quotation: null
          interpretation_note: CBDB 明确记录的王照圓配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GdQ22rEx0AOcfbiJTF5s7u
        subject_person_id: p_jzq5nT2YLYAvEUUUQjh5Pn
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_nE6F9a1b1YGuPTAKb3oqD3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p9oCt_DnbH2Zo7BWQ8Qzw_
          claim_id: c_GdQ22rEx0AOcfbiJTF5s7u
          source_id: s_2HPXvd2wZtDzmF7WGmH1bD
          stance: supports
          locator: CBDB 双向互证（丈夫 郝懿行）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jzq5nT2YLYAvEUUUQjh5Pn
        status: active
        display_name: 王照圓
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 郝懿行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 郝懿行（1755—1823），清人物。明清進士進士，籍贯棲霞，身份为小學家－訓詁學、農學家，入仕進士。（中国历代人物传记资料库 CBDB 30309） | accepted |
| name.primary | 郝懿行 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jzq5nT2YLYAvEUUUQjh5Pn | 王照圓 | accepted |

## 外部来源

- [中国历代人物传记资料库：郝懿行（CBDB 30309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30309&o=json)
