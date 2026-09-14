---
schema: wang-person/v1
id: p_njBHiDwuzEPix4LBLe5QbN
status: active
merged_into: null
display_name: 王宏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pz86nGEG7cAR3nWDT3QDtz
        subject_person_id: p_njBHiDwuzEPix4LBLe5QbN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qDDgkHkrUUTjr9GWJPhWWF
          claim_id: c_pz86nGEG7cAR3nWDT3QDtz
          source_id: s_54ynhbap6cZ49g1UJbS2mJ
          stance: supports
          locator: CBDB:270456
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270456）
          source: &a1
            id: s_54ynhbap6cZ49g1UJbS2mJ
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 270456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270456&o=json
            external_identifier: CBDB:270456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_udUg5sPvKgtEAHW4TB6px6
        subject_person_id: p_njBHiDwuzEPix4LBLe5QbN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏，明人物。弘治十五年進士，籍贯猗氏。（中国历代人物传记资料库 CBDB 270456）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X19TzJBA430KjZCwO6DUHP
          claim_id: c_udUg5sPvKgtEAHW4TB6px6
          source_id: s_54ynhbap6cZ49g1UJbS2mJ
          stance: supports
          locator: CBDB:270456
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iKp8LtWizTI5JuKenfxlK5
        subject_person_id: p_QKGAAeSaSvqwLmATQQdkV2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_njBHiDwuzEPix4LBLe5QbN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mq1F-9bQ7KCzqNDkEDb8xJ
          claim_id: c_iKp8LtWizTI5JuKenfxlK5
          source_id: s_bZoHtxLF_PFdK1ejQAjNDS
          stance: supports
          locator: CBDB：兄弟 王宗（201312）之父／母 王臣
          quotation: null
          interpretation_note: 由兄弟关系推断：王宏 与 王宗 为同胞（CBDB 记「弟」），王宗 之父／母即 王宏 之父／母。
          source:
            id: s_bZoHtxLF_PFdK1ejQAjNDS
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 270456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270456&o=json
            external_identifier: CBDB:270456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QKGAAeSaSvqwLmATQQdkV2
        status: active
        display_name: 王臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8_UPsf-sZIOQfM6eqn_WLc
        subject_person_id: p_TTq2erMoECd9k33QFqPJKB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_njBHiDwuzEPix4LBLe5QbN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DzXp8dkLHy_1g0DPI4ATTP
          claim_id: c_8_UPsf-sZIOQfM6eqn_WLc
          source_id: s_bZoHtxLF_PFdK1ejQAjNDS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201312 王宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bZoHtxLF_PFdK1ejQAjNDS
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 270456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270456&o=json
            external_identifier: CBDB:270456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TTq2erMoECd9k33QFqPJKB
        status: active
        display_name: 王宗
        merged_into_person_id: null
---

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| bio.summary | 王宏，明人物。弘治十五年進士，籍贯猗氏。（中国历代人物传记资料库 CBDB 270456） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QKGAAeSaSvqwLmATQQdkV2 | 王臣 | accepted |
| other | p_TTq2erMoECd9k33QFqPJKB | 王宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 270456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270456&o=json)
