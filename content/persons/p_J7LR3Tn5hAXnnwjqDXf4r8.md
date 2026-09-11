---
schema: wang-person/v1
id: p_J7LR3Tn5hAXnnwjqDXf4r8
status: active
merged_into: null
display_name: 王循
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QratNEtLKVYwAet3NP6rbZ
        subject_person_id: p_J7LR3Tn5hAXnnwjqDXf4r8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王循
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BKvhrtt1QALy6YJn8qi14J
          claim_id: c_QratNEtLKVYwAet3NP6rbZ
          source_id: s_NB2MKhiHjCLLzPMJFxGWSL
          stance: supports
          locator: CBDB:240554
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240554）
          source: &a1
            id: s_NB2MKhiHjCLLzPMJFxGWSL
            source_type: api_record
            title: 中国历代人物传记资料库：王循（CBDB 240554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240554&o=json
            external_identifier: CBDB:240554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UrER7XK91wCbMzVgkEv4Pw
        subject_person_id: p_J7LR3Tn5hAXnnwjqDXf4r8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王循，明人物。正統十三年進士，籍贯武邑，曾任儒學訓導。（中国历代人物传记资料库 CBDB 240554）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gCEiFYdzcwjU_04CvJ1lQE
          claim_id: c_UrER7XK91wCbMzVgkEv4Pw
          source_id: s_NB2MKhiHjCLLzPMJFxGWSL
          stance: supports
          locator: CBDB:240554
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_p1eOV5DIJu-JmiH_bKOQXg
        subject_person_id: p_J7LR3Tn5hAXnnwjqDXf4r8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZhoCANDJsNDr2hcDPbA4tV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AEFY2RjBX7ndpR6V0R1fmJ
          claim_id: c_p1eOV5DIJu-JmiH_bKOQXg
          source_id: s_NB2MKhiHjCLLzPMJFxGWSL
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第二甲第三十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZhoCANDJsNDr2hcDPbA4tV
        status: active
        display_name: 王勤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王循

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王循 | accepted |
| bio.summary | 王循，明人物。正統十三年進士，籍贯武邑，曾任儒學訓導。（中国历代人物传记资料库 CBDB 240554） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZhoCANDJsNDr2hcDPbA4tV | 王勤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王循（CBDB 240554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240554&o=json)
