---
schema: wang-person/v1
id: p_3VLxF8MJR5mpJh2S4AzoMr
status: active
merged_into: null
display_name: 王宗濬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RumaFc4RbmDpQ1a9dNMBt1
        subject_person_id: p_3VLxF8MJR5mpJh2S4AzoMr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RwAUm9VdXApqZwy6eSMDCN
          claim_id: c_RumaFc4RbmDpQ1a9dNMBt1
          source_id: s_1BZ3dGu1iWJ7qg4sdB9CqP
          stance: supports
          locator: CBDB:278551
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278551）
          source: &a1
            id: s_1BZ3dGu1iWJ7qg4sdB9CqP
            source_type: api_record
            title: 中国历代人物传记资料库：王宗濬（CBDB 278551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278551&o=json
            external_identifier: CBDB:278551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bmeTgCExpGgw8uuj21ZReg
        subject_person_id: p_3VLxF8MJR5mpJh2S4AzoMr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗濬，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278551）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZjOxHPna2EUzXkQzPUiSVc
          claim_id: c_bmeTgCExpGgw8uuj21ZReg
          source_id: s_1BZ3dGu1iWJ7qg4sdB9CqP
          stance: supports
          locator: CBDB:278551
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HeWvIyoUnX3-jNWDq64C42
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3VLxF8MJR5mpJh2S4AzoMr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_auUhNekvWoDgkDA8iM7roV
          claim_id: c_HeWvIyoUnX3-jNWDq64C42
          source_id: s_dnY0iEEbz_6mDZnKfgptFp
          stance: supports
          locator: CBDB：兄弟 王宗源（126561）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗濬 与 王宗源 为同胞（CBDB 记「兄」），王宗源 之父／母即 王宗濬 之父／母。
          source:
            id: s_dnY0iEEbz_6mDZnKfgptFp
            source_type: api_record
            title: 中国历代人物传记资料库：王宗濬（CBDB 278551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278551&o=json
            external_identifier: CBDB:278551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NfVYYG7aC993nZohPs46Tb
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_m8hxwaNmACj41HOL_DgQAV
        subject_person_id: p_3VLxF8MJR5mpJh2S4AzoMr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e53W5dAv1_yaK50IiuXnY3
          claim_id: c_m8hxwaNmACj41HOL_DgQAV
          source_id: s_dnY0iEEbz_6mDZnKfgptFp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126561 王宗源）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dnY0iEEbz_6mDZnKfgptFp
            source_type: api_record
            title: 中国历代人物传记资料库：王宗濬（CBDB 278551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278551&o=json
            external_identifier: CBDB:278551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        status: active
        display_name: 王宗源
        merged_into_person_id: null
---

# 王宗濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗濬 | accepted |
| bio.summary | 王宗濬，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278551） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NfVYYG7aC993nZohPs46Tb | 王綱 | accepted |
| other | p_tuf6Y9AXWQN6kvcQsy6Eb8 | 王宗源 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗濬（CBDB 278551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278551&o=json)
