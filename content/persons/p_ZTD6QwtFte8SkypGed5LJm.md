---
schema: wang-person/v1
id: p_ZTD6QwtFte8SkypGed5LJm
status: active
merged_into: null
display_name: 王昶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7sKW83hWrQkDnxh8u8bCNQ
        subject_person_id: p_ZTD6QwtFte8SkypGed5LJm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mU3Nde5qD1nEc6JQ7xmDWt
          claim_id: c_7sKW83hWrQkDnxh8u8bCNQ
          source_id: s_9h11sUVDCMaTn7HLa4tFwQ
          stance: supports
          locator: CBDB:237227
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237227）
          source: &a1
            id: s_9h11sUVDCMaTn7HLa4tFwQ
            source_type: api_record
            title: 中国历代人物传记资料库：王昶（CBDB 237227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237227&o=json
            external_identifier: CBDB:237227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pYENBN9JLrv4NJL62zR1sD
        subject_person_id: p_ZTD6QwtFte8SkypGed5LJm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昶，明人物。正統四年進士，籍贯高平。（中国历代人物传记资料库 CBDB 237227）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3GIottnlakkfY8OEROb53P
          claim_id: c_pYENBN9JLrv4NJL62zR1sD
          source_id: s_9h11sUVDCMaTn7HLa4tFwQ
          stance: supports
          locator: CBDB:237227
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_urcfuK_tSoeoon55HTRyyK
        subject_person_id: p_UxPyyPKFuTNFgt47NpTBe5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZTD6QwtFte8SkypGed5LJm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aZHTH-yLAKXynAfr0fvo47
          claim_id: c_urcfuK_tSoeoon55HTRyyK
          source_id: s_2OFgkpLhbqQlHihfDRYhfY
          stance: supports
          locator: CBDB：兄弟 王晏（207868）之父／母 王良
          quotation: null
          interpretation_note: 由兄弟关系推断：王昶 与 王晏 为同胞（CBDB 记「兄」），王晏 之父／母即 王昶 之父／母。
          source:
            id: s_2OFgkpLhbqQlHihfDRYhfY
            source_type: api_record
            title: 中国历代人物传记资料库：王昶（CBDB 237227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237227&o=json
            external_identifier: CBDB:237227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UxPyyPKFuTNFgt47NpTBe5
        status: active
        display_name: 王良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TrO5xEYdc8XO53yPDsbugE
        subject_person_id: p_3c99mAbtCMe882FKM3LMji
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZTD6QwtFte8SkypGed5LJm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_51EFgp2gjR5ovwhdkwiWRZ
          claim_id: c_TrO5xEYdc8XO53yPDsbugE
          source_id: s_2OFgkpLhbqQlHihfDRYhfY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207868 王晏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2OFgkpLhbqQlHihfDRYhfY
            source_type: api_record
            title: 中国历代人物传记资料库：王昶（CBDB 237227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237227&o=json
            external_identifier: CBDB:237227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3c99mAbtCMe882FKM3LMji
        status: active
        display_name: 王晏
        merged_into_person_id: null
---

# 王昶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昶 | accepted |
| bio.summary | 王昶，明人物。正統四年進士，籍贯高平。（中国历代人物传记资料库 CBDB 237227） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UxPyyPKFuTNFgt47NpTBe5 | 王良 | accepted |
| other | p_3c99mAbtCMe882FKM3LMji | 王晏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昶（CBDB 237227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237227&o=json)
