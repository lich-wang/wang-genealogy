---
schema: wang-person/v1
id: p_ErFcYWdXEJu7ryj51JuJxL
status: active
merged_into: null
display_name: 王令洙
cbdb_id: 14772
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2uSmjEy9pZF6snM5ibveq6
        subject_person_id: p_ErFcYWdXEJu7ryj51JuJxL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令洙，宋人物。籍贯崇德。（中国历代人物传记资料库 CBDB 14772）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9sgs2Gx-D1NSkLxv7DuLzc
          claim_id: c_2uSmjEy9pZF6snM5ibveq6
          source_id: s_MfHtvBK4P3bp9Pm3eCCF6C
          stance: supports
          locator: CBDB:14772
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MfHtvBK4P3bp9Pm3eCCF6C
            source_type: api_record
            title: 中国历代人物传记资料库：王令洙（CBDB 14772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14772&o=json
            external_identifier: CBDB:14772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7BQ4XS8PfRBU97VSJwF81d
        subject_person_id: p_ErFcYWdXEJu7ryj51JuJxL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令洙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_67DK11pnYKk2pDMkM91rpG
          claim_id: c_7BQ4XS8PfRBU97VSJwF81d
          source_id: s_MfHtvBK4P3bp9Pm3eCCF6C
          stance: supports
          locator: CBDB:14772
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-LHy1wZMCPTSXauec7l6RI
        subject_person_id: p_ErFcYWdXEJu7ryj51JuJxL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3KYKt6Lp82S9yD11eqqvYx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jqrWI5Xg02-_NtHSAfs78x
          claim_id: c_-LHy1wZMCPTSXauec7l6RI
          source_id: s_Jx1EW44gjXin7R5jr3oHBN
          stance: supports
          locator: CBDB 双向互证（父 王令洙 ⇄ 子 王琮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Jx1EW44gjXin7R5jr3oHBN
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 14773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14773&o=json
            external_identifier: CBDB:14773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3KYKt6Lp82S9yD11eqqvYx
        status: active
        display_name: 王琮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王令洙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王令洙，宋人物。籍贯崇德。（中国历代人物传记资料库 CBDB 14772） | accepted |
| name.primary | 王令洙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3KYKt6Lp82S9yD11eqqvYx | 王琮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 14773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14773&o=json)
- [中国历代人物传记资料库：王令洙（CBDB 14772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=14772&o=json)
