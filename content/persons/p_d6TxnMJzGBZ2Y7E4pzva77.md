---
schema: wang-person/v1
id: p_d6TxnMJzGBZ2Y7E4pzva77
status: active
merged_into: null
display_name: 王修
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MayYDewSiaxKBm5MJKkK8S
        subject_person_id: p_d6TxnMJzGBZ2Y7E4pzva77
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HJFwxhNfLKWA23y61Rkqj7
          claim_id: c_MayYDewSiaxKBm5MJKkK8S
          source_id: s_dmZaTSAD8jbn2pATYq2jQD
          stance: supports
          locator: CBDB:242145
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242145）
          source: &a1
            id: s_dmZaTSAD8jbn2pATYq2jQD
            source_type: api_record
            title: 中国历代人物传记资料库：王修（CBDB 242145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242145&o=json
            external_identifier: CBDB:242145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V2uRCjoPZNQ1fLien6dELe
        subject_person_id: p_d6TxnMJzGBZ2Y7E4pzva77
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修，明人物。成化二年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 242145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dpvmcISwBLB7sx1VuCpjoc
          claim_id: c_V2uRCjoPZNQ1fLien6dELe
          source_id: s_dmZaTSAD8jbn2pATYq2jQD
          stance: supports
          locator: CBDB:242145
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rjbUG_AXRqLLxRCpH9uwaN
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d6TxnMJzGBZ2Y7E4pzva77
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FR0ljbrE7XfMDAsLj-kSjX
          claim_id: c_rjbUG_AXRqLLxRCpH9uwaN
          source_id: s_2928ayQ-aiPwpSXNyfsVrp
          stance: supports
          locator: CBDB：兄弟 王億（199236）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王修 与 王億 为同胞（CBDB 记「弟」），王億 之父／母即 王修 之父／母。
          source:
            id: s_2928ayQ-aiPwpSXNyfsVrp
            source_type: api_record
            title: 中国历代人物传记资料库：王修（CBDB 242145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242145&o=json
            external_identifier: CBDB:242145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4C5VKRVzuAvr67X2BV8fCM
        status: active
        display_name: 王仲亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_M74iQyh-fCnhPmAMBMYxS3
        subject_person_id: p_Zv9iBHh6zJnNFQipkrhq3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_d6TxnMJzGBZ2Y7E4pzva77
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qaTYju-OARYzc6G3F8RsIO
          claim_id: c_M74iQyh-fCnhPmAMBMYxS3
          source_id: s_2928ayQ-aiPwpSXNyfsVrp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199236 王億）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2928ayQ-aiPwpSXNyfsVrp
            source_type: api_record
            title: 中国历代人物传记资料库：王修（CBDB 242145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242145&o=json
            external_identifier: CBDB:242145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zv9iBHh6zJnNFQipkrhq3H
        status: active
        display_name: 王億
        merged_into_person_id: null
---

# 王修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修 | accepted |
| bio.summary | 王修，明人物。成化二年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 242145） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4C5VKRVzuAvr67X2BV8fCM | 王仲亨 | accepted |
| other | p_Zv9iBHh6zJnNFQipkrhq3H | 王億 | accepted |

## 外部来源

- [中国历代人物传记资料库：王修（CBDB 242145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242145&o=json)
