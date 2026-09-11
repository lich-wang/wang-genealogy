---
schema: wang-person/v1
id: p_Qju67ahEiuJqKQGrjA4w6B
status: active
merged_into: null
display_name: 王庭芝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mQYAL5XKJkSqsTbU1LAtnG
        subject_person_id: p_Qju67ahEiuJqKQGrjA4w6B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭芝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eQ2bdRfBnYpwYFJnqvYLmY
          claim_id: c_mQYAL5XKJkSqsTbU1LAtnG
          source_id: s_DjECFUtiuZf73kK6pGREps
          stance: supports
          locator: CBDB:140365
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140365）
          source: &a1
            id: s_DjECFUtiuZf73kK6pGREps
            source_type: api_record
            title: 中国历代人物传记资料库：王庭芝（CBDB 140365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140365&o=json
            external_identifier: CBDB:140365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7wADeD9NvnjpC7G8EVjc9m
        subject_person_id: p_Qju67ahEiuJqKQGrjA4w6B
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 676年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_meRwAseQPKvN5VtP1pppvV
          claim_id: c_7wADeD9NvnjpC7G8EVjc9m
          source_id: s_DjECFUtiuZf73kK6pGREps
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
        id: c_7KPA9SduPMXipSqNwxPaH8
        subject_person_id: p_Qju67ahEiuJqKQGrjA4w6B
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 719年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bLQ4zFaGUtRZtMEQZaNX1F
          claim_id: c_7KPA9SduPMXipSqNwxPaH8
          source_id: s_DjECFUtiuZf73kK6pGREps
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
        id: c_LNtcw2Q1LNCVwFHw3zzhJm
        subject_person_id: p_Qju67ahEiuJqKQGrjA4w6B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭芝（676年—719年），唐人物。籍贯河東。（中国历代人物传记资料库 CBDB 140365）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VhvFA2o6twFa0zkmduaU_u
          claim_id: c_LNtcw2Q1LNCVwFHw3zzhJm
          source_id: s_DjECFUtiuZf73kK6pGREps
          stance: supports
          locator: CBDB:140365
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_imq9fZNr_uVhFBnDNNp_eg
        subject_person_id: p_RA5Q1hFsD4bFpuPrR9y5n3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qju67ahEiuJqKQGrjA4w6B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FQOFibhL9n_kaRbSDvt2MF
          claim_id: c_imq9fZNr_uVhFBnDNNp_eg
          source_id: s_DjECFUtiuZf73kK6pGREps
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 91：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RA5Q1hFsD4bFpuPrR9y5n3
        status: active
        display_name: 王哲
        merged_into_person_id: null
  children:
    - claim:
        id: c_0uMZ2cqd0Twlf1T1czIYFe
        subject_person_id: p_Qju67ahEiuJqKQGrjA4w6B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JFaVuR7J1VpwQj6ZwnAgVN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XQtHSqr5q0h2Gti-CS-5mG
          claim_id: c_0uMZ2cqd0Twlf1T1czIYFe
          source_id: s_DjECFUtiuZf73kK6pGREps
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 91：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JFaVuR7J1VpwQj6ZwnAgVN
        status: active
        display_name: 王僧護
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庭芝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭芝 | accepted |
| birth.date | 676年 | accepted |
| death.date | 719年 | accepted |
| bio.summary | 王庭芝（676年—719年），唐人物。籍贯河東。（中国历代人物传记资料库 CBDB 140365） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RA5Q1hFsD4bFpuPrR9y5n3 | 王哲 | accepted |
| children | p_JFaVuR7J1VpwQj6ZwnAgVN | 王僧護 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庭芝（CBDB 140365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140365&o=json)
