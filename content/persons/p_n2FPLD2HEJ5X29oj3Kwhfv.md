---
schema: wang-person/v1
id: p_n2FPLD2HEJ5X29oj3Kwhfv
status: active
merged_into: null
display_name: 王載
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LQnKzxhJA1S1sCKNupjie6
        subject_person_id: p_n2FPLD2HEJ5X29oj3Kwhfv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王載
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_94Brq41j3CHTmmN5t9Vbb2
          claim_id: c_LQnKzxhJA1S1sCKNupjie6
          source_id: s_bzcN1e1np3E4LGwcNt8ycP
          stance: supports
          locator: CBDB:294142
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294142）
          source: &a1
            id: s_bzcN1e1np3E4LGwcNt8ycP
            source_type: api_record
            title: 中国历代人物传记资料库：王載（CBDB 294142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294142&o=json
            external_identifier: CBDB:294142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3kYyjpmgUaHGrUqNfWJ65s
        subject_person_id: p_n2FPLD2HEJ5X29oj3Kwhfv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王載，明人物。嘉靖十一年進士，籍贯太康。（中国历代人物传记资料库 CBDB 294142）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0a2GrG7EvhB6qpUHP2V--w
          claim_id: c_3kYyjpmgUaHGrUqNfWJ65s
          source_id: s_bzcN1e1np3E4LGwcNt8ycP
          stance: supports
          locator: CBDB:294142
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_X3aTDN4O7jQVf0xhOHfeGH
        subject_person_id: p_n2FPLD2HEJ5X29oj3Kwhfv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NYtdu2CY4GDrtrwsQaXuDi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M54up-HnrRZXA0AetrUh-i
          claim_id: c_X3aTDN4O7jQVf0xhOHfeGH
          source_id: s_bzcN1e1np3E4LGwcNt8ycP
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NYtdu2CY4GDrtrwsQaXuDi
        status: active
        display_name: 王朝賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王載

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王載 | accepted |
| bio.summary | 王載，明人物。嘉靖十一年進士，籍贯太康。（中国历代人物传记资料库 CBDB 294142） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NYtdu2CY4GDrtrwsQaXuDi | 王朝賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王載（CBDB 294142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294142&o=json)
