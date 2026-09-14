---
schema: wang-person/v1
id: p_r6BBFwnL8PML5iF4nDhUH1
status: active
merged_into: null
display_name: 王伯清
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AoYFeWd98tPDvi7P1SoiST
        subject_person_id: p_r6BBFwnL8PML5iF4nDhUH1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vhk8Aa4e8mnWvVv55P55og
          claim_id: c_AoYFeWd98tPDvi7P1SoiST
          source_id: s_Q5NFKKShMj3D4Rcee2nnAR
          stance: supports
          locator: CBDB:274044
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274044）
          source: &a1
            id: s_Q5NFKKShMj3D4Rcee2nnAR
            source_type: api_record
            title: 中国历代人物传记资料库：王伯清（CBDB 274044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274044&o=json
            external_identifier: CBDB:274044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UbNxmUSUgp1N2BGBhNFtDm
        subject_person_id: p_r6BBFwnL8PML5iF4nDhUH1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯清，明人物。弘治十八年進士，籍贯青神。（中国历代人物传记资料库 CBDB 274044）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sILjA6yrLotgKL8w3KTxP-
          claim_id: c_UbNxmUSUgp1N2BGBhNFtDm
          source_id: s_Q5NFKKShMj3D4Rcee2nnAR
          stance: supports
          locator: CBDB:274044
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5bQfaitR3rgWo4vS9DRQhd
        subject_person_id: p_dPbUUoQEGcRs5zuUF67Td8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r6BBFwnL8PML5iF4nDhUH1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SsUz3SkKKdeqBKtDWYbzmM
          claim_id: c_5bQfaitR3rgWo4vS9DRQhd
          source_id: s_cxB4D4brHRbMj9p8FnzMK1
          stance: supports
          locator: CBDB：兄弟 王一麟（201540）之父／母 王坤
          quotation: null
          interpretation_note: 由兄弟关系推断：王伯清 与 王一麟 为同胞（CBDB 记「弟」），王一麟 之父／母即 王伯清 之父／母。
          source:
            id: s_cxB4D4brHRbMj9p8FnzMK1
            source_type: api_record
            title: 中国历代人物传记资料库：王伯清（CBDB 274044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274044&o=json
            external_identifier: CBDB:274044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dPbUUoQEGcRs5zuUF67Td8
        status: active
        display_name: 王坤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_eA6A3v8y4OPI59SUJifpo9
        subject_person_id: p_r6BBFwnL8PML5iF4nDhUH1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zypfM9LtT1QVxbd1JRHGna
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8e0N6JL56y1jFpPC7t9WAK
          claim_id: c_eA6A3v8y4OPI59SUJifpo9
          source_id: s_cxB4D4brHRbMj9p8FnzMK1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201540 王一麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cxB4D4brHRbMj9p8FnzMK1
            source_type: api_record
            title: 中国历代人物传记资料库：王伯清（CBDB 274044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274044&o=json
            external_identifier: CBDB:274044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zypfM9LtT1QVxbd1JRHGna
        status: active
        display_name: 王一麟
        merged_into_person_id: null
---

# 王伯清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯清 | accepted |
| bio.summary | 王伯清，明人物。弘治十八年進士，籍贯青神。（中国历代人物传记资料库 CBDB 274044） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dPbUUoQEGcRs5zuUF67Td8 | 王坤 | accepted |
| other | p_zypfM9LtT1QVxbd1JRHGna | 王一麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯清（CBDB 274044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274044&o=json)
