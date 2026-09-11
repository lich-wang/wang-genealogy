---
schema: wang-person/v1
id: p_DpQiwc8xYXUruWevnbjJPo
status: active
merged_into: null
display_name: 王仲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7UuFfRtHEZ2oVt1v5QuMcn
        subject_person_id: p_DpQiwc8xYXUruWevnbjJPo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZxjoSQVa2bLQM5YC7DPQFx
          claim_id: c_7UuFfRtHEZ2oVt1v5QuMcn
          source_id: s_DULoJjSFVPUakU1udCVKyY
          stance: supports
          locator: CBDB:138715
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138715）
          source: &a1
            id: s_DULoJjSFVPUakU1udCVKyY
            source_type: api_record
            title: 中国历代人物传记资料库：王仲（CBDB 138715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138715&o=json
            external_identifier: CBDB:138715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sn8QRCnYmQFcuFoKbEp115
        subject_person_id: p_DpQiwc8xYXUruWevnbjJPo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 555年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Q3xnAACexWE4gN9qaT7So
          claim_id: c_sn8QRCnYmQFcuFoKbEp115
          source_id: s_DULoJjSFVPUakU1udCVKyY
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
        id: c_is3SwsJwxqoRUGBBJpTSm2
        subject_person_id: p_DpQiwc8xYXUruWevnbjJPo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 620年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9qmPTm5nuMMf5LM6a3PisJ
          claim_id: c_is3SwsJwxqoRUGBBJpTSm2
          source_id: s_DULoJjSFVPUakU1udCVKyY
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
        id: c_Jk3HfGDksN2NniGrFJVmDQ
        subject_person_id: p_DpQiwc8xYXUruWevnbjJPo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲（555年—620年），鄭（王世充）人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 138715）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I8JD5hJ-kZ7QWjrasKU9uu
          claim_id: c_Jk3HfGDksN2NniGrFJVmDQ
          source_id: s_DULoJjSFVPUakU1udCVKyY
          stance: supports
          locator: CBDB:138715
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DQrIwMvbFLzY9bdTVthwWH
        subject_person_id: p_DpQiwc8xYXUruWevnbjJPo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C4L8C9ZGQKbGE4WJu2C1p9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QWX5l6mzUGlbFpkOMx9I1O
          claim_id: c_DQrIwMvbFLzY9bdTVthwWH
          source_id: s_9vX6wGH9DksbszvX2D8tck
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiming 4：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9vX6wGH9DksbszvX2D8tck
            source_type: api_record
            title: 中国历代人物传记资料库：王基（CBDB 146414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146414&o=json
            external_identifier: CBDB:146414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C4L8C9ZGQKbGE4WJu2C1p9
        status: active
        display_name: 王基
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_-0dm9MXRggofDSHuhnjBMp
        subject_person_id: p_DpQiwc8xYXUruWevnbjJPo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_769o73ny55NTrot2CDbQDr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P1tBNKODvfcLokkk_EptxX
          claim_id: c_-0dm9MXRggofDSHuhnjBMp
          source_id: s_xQRzar5cU94ilG_gPV6uJ1
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiming 4：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xQRzar5cU94ilG_gPV6uJ1
            source_type: api_record
            title: 中国历代人物传记资料库：淳于氏(王仲妻)（CBDB 146412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146412&o=json
            external_identifier: CBDB:146412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_769o73ny55NTrot2CDbQDr
        status: active
        display_name: 淳于氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲 | accepted |
| birth.date | 555年 | accepted |
| death.date | 620年 | accepted |
| bio.summary | 王仲（555年—620年），鄭（王世充）人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 138715） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_C4L8C9ZGQKbGE4WJu2C1p9 | 王基 | accepted |
| spouses | p_769o73ny55NTrot2CDbQDr | 淳于氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：淳于氏(王仲妻)（CBDB 146412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146412&o=json)
- [中国历代人物传记资料库：王基（CBDB 146414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146414&o=json)
- [中国历代人物传记资料库：王仲（CBDB 138715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138715&o=json)
