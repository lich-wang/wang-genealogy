---
schema: wang-person/v1
id: p_xfuuciWrW1oRJMYJWgyk2k
status: active
merged_into: null
display_name: 王晉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4ojvvq4j4eJ4By4dHxv8Un
        subject_person_id: p_xfuuciWrW1oRJMYJWgyk2k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9zyKqn7MQaQVmCYaWcq7K2
          claim_id: c_4ojvvq4j4eJ4By4dHxv8Un
          source_id: s_RU1WTFd9b3cGHpbNnSVsGX
          stance: supports
          locator: CBDB:140630
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140630）
          source: &a1
            id: s_RU1WTFd9b3cGHpbNnSVsGX
            source_type: api_record
            title: 中国历代人物传记资料库：王晉（CBDB 140630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140630&o=json
            external_identifier: CBDB:140630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HoPJhJdGQq3Ts8TESf7Y7e
        subject_person_id: p_xfuuciWrW1oRJMYJWgyk2k
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 657年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dQFfR5qZEB3fVPHgJFdmRb
          claim_id: c_HoPJhJdGQq3Ts8TESf7Y7e
          source_id: s_RU1WTFd9b3cGHpbNnSVsGX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1PM35hNzKYoiQnDjBSvkkP
        subject_person_id: p_xfuuciWrW1oRJMYJWgyk2k
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 723年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JrESpSa2TYyfDs6v68AQyz
          claim_id: c_1PM35hNzKYoiQnDjBSvkkP
          source_id: s_RU1WTFd9b3cGHpbNnSVsGX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SjVdW4RvtULoPzW37q4doV
        subject_person_id: p_xfuuciWrW1oRJMYJWgyk2k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉（657年—723年），唐人物。籍贯京兆府。（中国历代人物传记资料库 CBDB 140630）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rl6iw1AcC1p4Np0q3q1Qh6
          claim_id: c_SjVdW4RvtULoPzW37q4doV
          source_id: s_RU1WTFd9b3cGHpbNnSVsGX
          stance: supports
          locator: CBDB:140630
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MzniajTua3vCE5pE7wVLRq
        subject_person_id: p_W5G53hYc4kxcrcPiJ3Wvpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xfuuciWrW1oRJMYJWgyk2k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nsTbkh_XpqdoPfIenkrqrw
          claim_id: c_MzniajTua3vCE5pE7wVLRq
          source_id: s_jYcBs4UrajbQBnKMPrYvBJ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 268：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jYcBs4UrajbQBnKMPrYvBJ
            source_type: api_record
            title: 中国历代人物传记资料库：王幹（CBDB 152084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152084&o=json
            external_identifier: CBDB:152084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_W5G53hYc4kxcrcPiJ3Wvpw
        status: active
        display_name: 王幹
        merged_into_person_id: null
  children:
    - claim:
        id: c_UxL3ZsvygAiYyX8lJHoX5Z
        subject_person_id: p_xfuuciWrW1oRJMYJWgyk2k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E1MN8v4fUcaVhsZPNKyJbM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aaQzY4Yf9GWfBpbHQtNgCu
          claim_id: c_UxL3ZsvygAiYyX8lJHoX5Z
          source_id: s_F6y4SeFWHuzCVYWWJoZFtG
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 268：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F6y4SeFWHuzCVYWWJoZFtG
            source_type: api_record
            title: 中国历代人物传记资料库：王崇義（CBDB 152083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152083&o=json
            external_identifier: CBDB:152083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_E1MN8v4fUcaVhsZPNKyJbM
        status: active
        display_name: 王崇義
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉 | accepted |
| birth.date | 657年 | accepted |
| death.date | 723年 | accepted |
| bio.summary | 王晉（657年—723年），唐人物。籍贯京兆府。（中国历代人物传记资料库 CBDB 140630） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W5G53hYc4kxcrcPiJ3Wvpw | 王幹 | accepted |
| children | p_E1MN8v4fUcaVhsZPNKyJbM | 王崇義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇義（CBDB 152083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152083&o=json)
- [中国历代人物传记资料库：王幹（CBDB 152084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152084&o=json)
- [中国历代人物传记资料库：王晉（CBDB 140630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140630&o=json)
