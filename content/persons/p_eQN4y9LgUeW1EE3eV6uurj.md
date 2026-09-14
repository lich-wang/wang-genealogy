---
schema: wang-person/v1
id: p_eQN4y9LgUeW1EE3eV6uurj
status: active
merged_into: null
display_name: 王同讚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aLq1CoZTa4rf5bbnU9LKhc
        subject_person_id: p_eQN4y9LgUeW1EE3eV6uurj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同讚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gcm87mvK5LgxYnM8ngnCUN
          claim_id: c_aLq1CoZTa4rf5bbnU9LKhc
          source_id: s_qkwnqhh1BJVEVVDDiBvPQP
          stance: supports
          locator: CBDB:228274
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228274）
          source: &a1
            id: s_qkwnqhh1BJVEVVDDiBvPQP
            source_type: api_record
            title: 中国历代人物传记资料库：王同讚（CBDB 228274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228274&o=json
            external_identifier: CBDB:228274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fb67k5DYj5kLJgLHPbQr1W
        subject_person_id: p_eQN4y9LgUeW1EE3eV6uurj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同讚，明人物。萬曆丙戌科進士進士，籍贯晉江，入仕進士，曾任太僕寺少卿。（中国历代人物传记资料库 CBDB 228274）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9fTRfXS_y0PkpDwmokcv78
          claim_id: c_Fb67k5DYj5kLJgLHPbQr1W
          source_id: s_qkwnqhh1BJVEVVDDiBvPQP
          stance: supports
          locator: CBDB:228274
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DjDBToiGZpRzRn4Bzp8Ylz
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eQN4y9LgUeW1EE3eV6uurj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HxKgDVQv3oJVxlZUO3326s
          claim_id: c_DjDBToiGZpRzRn4Bzp8Ylz
          source_id: s_7w0gBfGTppNSdjyH-eMunI
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同讚 与 王同休 为同胞（CBDB 记「弟」），王同休 之父／母即 王同讚 之父／母。
          source:
            id: s_7w0gBfGTppNSdjyH-eMunI
            source_type: api_record
            title: 中国历代人物传记资料库：王同讚（CBDB 228274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228274&o=json
            external_identifier: CBDB:228274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kNvoZFnJm2KQZhvhLXYs7R
        status: active
        display_name: 王惟中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_J-JtK1GAWE248o4tmqETdt
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQN4y9LgUeW1EE3eV6uurj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G6sIvwMDKQK79nJnQJKgC4
          claim_id: c_J-JtK1GAWE248o4tmqETdt
          source_id: s_7w0gBfGTppNSdjyH-eMunI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7w0gBfGTppNSdjyH-eMunI
            source_type: api_record
            title: 中国历代人物传记资料库：王同讚（CBDB 228274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228274&o=json
            external_identifier: CBDB:228274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MWFGy9uHg9NsSwK8c42QRv
        status: active
        display_name: 王同休
        merged_into_person_id: null
---

# 王同讚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同讚 | accepted |
| bio.summary | 王同讚，明人物。萬曆丙戌科進士進士，籍贯晉江，入仕進士，曾任太僕寺少卿。（中国历代人物传记资料库 CBDB 228274） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kNvoZFnJm2KQZhvhLXYs7R | 王惟中 | accepted |
| other | p_MWFGy9uHg9NsSwK8c42QRv | 王同休 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同讚（CBDB 228274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228274&o=json)
