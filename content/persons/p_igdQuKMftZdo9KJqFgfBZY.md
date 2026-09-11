---
schema: wang-person/v1
id: p_igdQuKMftZdo9KJqFgfBZY
status: active
merged_into: null
display_name: 王端
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vwWsC2cXQ6SApbBMg1fQsL
        subject_person_id: p_igdQuKMftZdo9KJqFgfBZY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WBAFW3gCmmaRbdHESWv4Lo
          claim_id: c_vwWsC2cXQ6SApbBMg1fQsL
          source_id: s_sQZNcK3Fy1x5k6jPQKt7L6
          stance: supports
          locator: CBDB:139515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139515）
          source: &a1
            id: s_sQZNcK3Fy1x5k6jPQKt7L6
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 139515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139515&o=json
            external_identifier: CBDB:139515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MGQCkDT1WQBJAkD1NiKKA3
        subject_person_id: p_igdQuKMftZdo9KJqFgfBZY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 589年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6BiqTPm8JLi8sy7N9RFW2k
          claim_id: c_MGQCkDT1WQBJAkD1NiKKA3
          source_id: s_sQZNcK3Fy1x5k6jPQKt7L6
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
        id: c_GL5UotA9D4vZ5PDT2SgumL
        subject_person_id: p_igdQuKMftZdo9KJqFgfBZY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 667年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wj1U92PyUtmHcLHa1YHQas
          claim_id: c_GL5UotA9D4vZ5PDT2SgumL
          source_id: s_sQZNcK3Fy1x5k6jPQKt7L6
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
        id: c_KsMiK5QsHRCwFvyVKpcBm2
        subject_person_id: p_igdQuKMftZdo9KJqFgfBZY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端（589年—667年），唐人物。籍贯洛陽，曾任車騎。（中国历代人物传记资料库 CBDB 139515）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n_aNFfwPTIIBKN523_Azfd
          claim_id: c_KsMiK5QsHRCwFvyVKpcBm2
          source_id: s_sQZNcK3Fy1x5k6jPQKt7L6
          stance: supports
          locator: CBDB:139515
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1-PCjl_btRyWNQlg8vys0O
        subject_person_id: p_J7bx3Es3E65jxWYhEveYxo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_igdQuKMftZdo9KJqFgfBZY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YjlPyf1gXI77vbslFx4bv_
          claim_id: c_1-PCjl_btRyWNQlg8vys0O
          source_id: s_sQZNcK3Fy1x5k6jPQKt7L6
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 36：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J7bx3Es3E65jxWYhEveYxo
        status: active
        display_name: 王叔卿
        merged_into_person_id: null
  children:
    - claim:
        id: c_ZzI7VY857CJyZxQdyIp_lr
        subject_person_id: p_igdQuKMftZdo9KJqFgfBZY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i9PK9zvHYqiP33ujDaLZTc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6iv0haAJhmE-uA8UtXlxBQ
          claim_id: c_ZzI7VY857CJyZxQdyIp_lr
          source_id: s_sQZNcK3Fy1x5k6jPQKt7L6
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 36：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_i9PK9zvHYqiP33ujDaLZTc
        status: active
        display_name: 王德高
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_aNIIviLD0rYwQIkpJ9sGFe
        subject_person_id: p_igdQuKMftZdo9KJqFgfBZY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CKF7FeViuDmG4JtWSdtokG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s4s9pdKqPIi6aB-nGe1g5N
          claim_id: c_aNIIviLD0rYwQIkpJ9sGFe
          source_id: s_UwePw-5Kf3wn82guVKMHT8
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 36：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UwePw-5Kf3wn82guVKMHT8
            source_type: api_record
            title: 中国历代人物传记资料库：蘇氏(王端妻)（CBDB 148216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148216&o=json
            external_identifier: CBDB:148216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CKF7FeViuDmG4JtWSdtokG
        status: active
        display_name: 蘇氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| birth.date | 589年 | accepted |
| death.date | 667年 | accepted |
| bio.summary | 王端（589年—667年），唐人物。籍贯洛陽，曾任車騎。（中国历代人物传记资料库 CBDB 139515） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J7bx3Es3E65jxWYhEveYxo | 王叔卿 | accepted |
| children | p_i9PK9zvHYqiP33ujDaLZTc | 王德高 | accepted |
| spouses | p_CKF7FeViuDmG4JtWSdtokG | 蘇氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇氏(王端妻)（CBDB 148216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148216&o=json)
- [中国历代人物传记资料库：王端（CBDB 139515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139515&o=json)
