---
schema: wang-person/v1
id: p_ZhoCANDJsNDr2hcDPbA4tV
status: active
merged_into: null
display_name: 王勤
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PTHGsUBTW2xLHENpxLVRQi
        subject_person_id: p_ZhoCANDJsNDr2hcDPbA4tV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q3ZxLTEt1uNZBcQuaYpGTW
          claim_id: c_PTHGsUBTW2xLHENpxLVRQi
          source_id: s_JqwuNDGT1RiZ44ZM3rN4x4
          stance: supports
          locator: CBDB:208107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208107）
          source: &a1
            id: s_JqwuNDGT1RiZ44ZM3rN4x4
            source_type: api_record
            title: 中国历代人物传记资料库：王勤（CBDB 208107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208107&o=json
            external_identifier: CBDB:208107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4oSML6UvN7KBZWqQtSKfNP
        subject_person_id: p_ZhoCANDJsNDr2hcDPbA4tV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1420年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GCVT7xiq9jGMCsYC7rE2Mo
          claim_id: c_4oSML6UvN7KBZWqQtSKfNP
          source_id: s_JqwuNDGT1RiZ44ZM3rN4x4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YPaAZEGDg4czmbcNBTAc6Y
        subject_person_id: p_ZhoCANDJsNDr2hcDPbA4tV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hm8KRy9kbaX5GKFM2QB2mi
          claim_id: c_YPaAZEGDg4czmbcNBTAc6Y
          source_id: s_JqwuNDGT1RiZ44ZM3rN4x4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_J7LR3Tn5hAXnnwjqDXf4r8
        status: active
        display_name: 王循
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XT6lYd-AlkXoS5VY8kjASg
        subject_person_id: p_JsYz5ZbDBwQAMNggwAhP7w
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZhoCANDJsNDr2hcDPbA4tV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7ZjWwHhO-0WYhx3S3k8m4f
          claim_id: c_XT6lYd-AlkXoS5VY8kjASg
          source_id: s_G8hvh1LJTkqJ8F2yJZ5o5a
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第二甲第三十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G8hvh1LJTkqJ8F2yJZ5o5a
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 240552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240552&o=json
            external_identifier: CBDB:240552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JsYz5ZbDBwQAMNggwAhP7w
        status: active
        display_name: 王斌
        merged_into_person_id: null
    - claim:
        id: c_wwQoZxSetkRhLvGdnX_Hiu
        subject_person_id: p_44kmqUGWdHHonm5fGi2vGq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZhoCANDJsNDr2hcDPbA4tV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vGmILLQNo7znQsvTdWsqGP
          claim_id: c_wwQoZxSetkRhLvGdnX_Hiu
          source_id: s_oEYF7ubfTaqK92HyGYCcjP
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第二甲第三十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oEYF7ubfTaqK92HyGYCcjP
            source_type: api_record
            title: 中国历代人物传记资料库：王士貞（CBDB 240551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240551&o=json
            external_identifier: CBDB:240551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_44kmqUGWdHHonm5fGi2vGq
        status: active
        display_name: 王士貞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王勤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勤 | accepted |
| birth.date | 1420年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J7LR3Tn5hAXnnwjqDXf4r8 | 王循 | accepted |
| ancestors | p_JsYz5ZbDBwQAMNggwAhP7w | 王斌 | accepted |
| ancestors | p_44kmqUGWdHHonm5fGi2vGq | 王士貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 240552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240552&o=json)
- [中国历代人物传记资料库：王勤（CBDB 208107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208107&o=json)
- [中国历代人物传记资料库：王士貞（CBDB 240551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240551&o=json)
- [中国历代人物传记资料库：王循（CBDB 240554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240554&o=json)
