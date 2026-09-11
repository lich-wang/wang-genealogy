---
schema: wang-person/v1
id: p_N4m8f1CJyyaPfxmbQEmr7X
status: active
merged_into: null
display_name: 王珣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kWwm8UKXJdQdYkpUTGay2k
        subject_person_id: p_N4m8f1CJyyaPfxmbQEmr7X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NNK64G9bCbHyoBp9gFuEj4
          claim_id: c_kWwm8UKXJdQdYkpUTGay2k
          source_id: s_hdxe6Kg5j4msZ4hWo3Tojh
          stance: supports
          locator: CBDB:10335
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10335）
          source: &a1
            id: s_hdxe6Kg5j4msZ4hWo3Tojh
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 10335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10335&o=json
            external_identifier: CBDB:10335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KDx5GbSfBJCD8DPGp9zx7K
        subject_person_id: p_N4m8f1CJyyaPfxmbQEmr7X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X8QWsDs4zwvVG7HoMbC1aC
          claim_id: c_KDx5GbSfBJCD8DPGp9zx7K
          source_id: s_hdxe6Kg5j4msZ4hWo3Tojh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_B38zEZ10k5wRO8aStX7qhq
        subject_person_id: p_N4m8f1CJyyaPfxmbQEmr7X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4H6hmNE3a7KsJizuXuhwwM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OSGvOlm0IQaKwILXnsbxZc
          claim_id: c_B38zEZ10k5wRO8aStX7qhq
          source_id: s_Yic4HWUmUS3sWTFBmHNmnx
          stance: supports
          locator: CBDB 双向互证（父 王珣 ⇄ 子 王礎）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Yic4HWUmUS3sWTFBmHNmnx
            source_type: api_record
            title: 中国历代人物传记资料库：王礎（CBDB 10336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10336&o=json
            external_identifier: CBDB:10336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4H6hmNE3a7KsJizuXuhwwM
        status: active
        display_name: 王礎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JNB5xtcGlZVMmSRycNJb6F
        subject_person_id: p_sMs1sh8RxZBVXLuidE5udf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_N4m8f1CJyyaPfxmbQEmr7X
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gGjC_zEd5zHtOyySbb84Qr
          claim_id: c_JNB5xtcGlZVMmSRycNJb6F
          source_id: s_hdxe6Kg5j4msZ4hWo3Tojh
          stance: supports
          locator: CBDB 双向互证（祖父 王仁僓 ⇄ 孫 王珣）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_sMs1sh8RxZBVXLuidE5udf
        status: active
        display_name: 王仁僓
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王珣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珣 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4H6hmNE3a7KsJizuXuhwwM | 王礎 | accepted |
| ancestors | p_sMs1sh8RxZBVXLuidE5udf | 王仁僓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王礎（CBDB 10336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10336&o=json)
- [中国历代人物传记资料库：王珣（CBDB 10335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10335&o=json)
