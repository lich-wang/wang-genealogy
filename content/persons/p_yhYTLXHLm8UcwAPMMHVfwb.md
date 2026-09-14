---
schema: wang-person/v1
id: p_yhYTLXHLm8UcwAPMMHVfwb
status: active
merged_into: null
display_name: 王時某
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sc5ysuzBD5o9bCNdK3PXKB
        subject_person_id: p_yhYTLXHLm8UcwAPMMHVfwb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K25VdpiUcaoqjf3M53LQBG
          claim_id: c_sc5ysuzBD5o9bCNdK3PXKB
          source_id: s_3wURAdMCm975T57DQz4ch3
          stance: supports
          locator: CBDB:280639
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280639）
          source: &a1
            id: s_3wURAdMCm975T57DQz4ch3
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 280639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280639&o=json
            external_identifier: CBDB:280639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mDzdVGWMZwDYeQpzo6e6xB
        subject_person_id: p_yhYTLXHLm8UcwAPMMHVfwb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時某，明人物。正德十二年進士，籍贯萬安。（中国历代人物传记资料库 CBDB 280639）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PEJZnZ-_GZI-3Nkz_sTXQa
          claim_id: c_mDzdVGWMZwDYeQpzo6e6xB
          source_id: s_3wURAdMCm975T57DQz4ch3
          stance: supports
          locator: CBDB:280639
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BmVIAtYqwhK-yKwD-bey9f
        subject_person_id: p_pTB7HsH5CT4VpfKwtjMaNH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yhYTLXHLm8UcwAPMMHVfwb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xADt-bz9-wYOnemYol8XAq
          claim_id: c_BmVIAtYqwhK-yKwD-bey9f
          source_id: s_WBqUtuHB6JO5QXbZ5w5uio
          stance: supports
          locator: CBDB：兄弟 王時柯（68118）之父／母 王淵
          quotation: null
          interpretation_note: 由兄弟关系推断：王時某 与 王時柯 为同胞（CBDB 记「兄」），王時柯 之父／母即 王時某 之父／母。
          source:
            id: s_WBqUtuHB6JO5QXbZ5w5uio
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 280639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280639&o=json
            external_identifier: CBDB:280639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pTB7HsH5CT4VpfKwtjMaNH
        status: active
        display_name: 王淵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Cmn6BYf8gwjwMl57g8TbmF
        subject_person_id: p_pUwZmXJA98H12Cyv9Q6e5y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yhYTLXHLm8UcwAPMMHVfwb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D4d1AqBxaz0FXTBWgqSZVq
          claim_id: c_Cmn6BYf8gwjwMl57g8TbmF
          source_id: s_WBqUtuHB6JO5QXbZ5w5uio
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68118 王時柯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WBqUtuHB6JO5QXbZ5w5uio
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 280639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280639&o=json
            external_identifier: CBDB:280639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pUwZmXJA98H12Cyv9Q6e5y
        status: active
        display_name: 王時柯
        merged_into_person_id: null
---

# 王時某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時某 | accepted |
| bio.summary | 王時某，明人物。正德十二年進士，籍贯萬安。（中国历代人物传记资料库 CBDB 280639） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pTB7HsH5CT4VpfKwtjMaNH | 王淵 | accepted |
| other | p_pUwZmXJA98H12Cyv9Q6e5y | 王時柯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時某（CBDB 280639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280639&o=json)
