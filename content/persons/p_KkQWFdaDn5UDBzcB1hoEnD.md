---
schema: wang-person/v1
id: p_KkQWFdaDn5UDBzcB1hoEnD
status: active
merged_into: null
display_name: 王瑩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pMEC9DPdK54g6Fiy5Ds48R
        subject_person_id: p_KkQWFdaDn5UDBzcB1hoEnD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PXH1c2PsjTKTbkRkSUX4Nb
          claim_id: c_pMEC9DPdK54g6Fiy5Ds48R
          source_id: s_u6uYrmW44FqjACHMHcJQ4W
          stance: supports
          locator: CBDB:292495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292495）
          source: &a1
            id: s_u6uYrmW44FqjACHMHcJQ4W
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 292495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292495&o=json
            external_identifier: CBDB:292495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.408Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NVypzpifkir2LNoHuDcfZb
        subject_person_id: p_KkQWFdaDn5UDBzcB1hoEnD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩，明人物。天順元年進士，籍贯汝州。（中国历代人物传记资料库 CBDB 292495）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aYu7ZuTsxqpixv8ZF1X6Xc
          claim_id: c_NVypzpifkir2LNoHuDcfZb
          source_id: s_u6uYrmW44FqjACHMHcJQ4W
          stance: supports
          locator: CBDB:292495
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pNmlmBbLvigLQRQZz6rXm_
        subject_person_id: p_ngzLTQ61GEdZsLrb6boLr4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KkQWFdaDn5UDBzcB1hoEnD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D2p_-_hY9tuOBXa9zA1E6m
          claim_id: c_pNmlmBbLvigLQRQZz6rXm_
          source_id: s_hmx1scdCcUtKYzrNNI0cva
          stance: supports
          locator: CBDB：兄弟 王預（198598）之父／母 王思齊
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑩 与 王預 为同胞（CBDB 记「兄」），王預 之父／母即 王瑩 之父／母。
          source:
            id: s_hmx1scdCcUtKYzrNNI0cva
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 292495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292495&o=json
            external_identifier: CBDB:292495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ngzLTQ61GEdZsLrb6boLr4
        status: active
        display_name: 王思齊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4VYYFuzI2XWNoZPpMD35DN
        subject_person_id: p_KkQWFdaDn5UDBzcB1hoEnD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MB31qtyXiP7DGzQ9oxGxHs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ca02ELKi7Ry_mCCZkti9EQ
          claim_id: c_4VYYFuzI2XWNoZPpMD35DN
          source_id: s_hmx1scdCcUtKYzrNNI0cva
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198598 王預）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hmx1scdCcUtKYzrNNI0cva
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 292495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292495&o=json
            external_identifier: CBDB:292495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MB31qtyXiP7DGzQ9oxGxHs
        status: active
        display_name: 王預
        merged_into_person_id: null
---

# 王瑩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑩 | accepted |
| bio.summary | 王瑩，明人物。天順元年進士，籍贯汝州。（中国历代人物传记资料库 CBDB 292495） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ngzLTQ61GEdZsLrb6boLr4 | 王思齊 | accepted |
| other | p_MB31qtyXiP7DGzQ9oxGxHs | 王預 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑩（CBDB 292495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292495&o=json)
