---
schema: wang-person/v1
id: p_H4Uy6ApLcV6Le6pdH8Y4bo
status: active
merged_into: null
display_name: 王材
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ApgG1jxRUNQEkderi3Vrmj
        subject_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MCqiQZ2ux21L6pcLBCPYSU
          claim_id: c_ApgG1jxRUNQEkderi3Vrmj
          source_id: s_KR4KbMbo5WjrLwGk2VkQGn
          stance: supports
          locator: CBDB:126534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126534）
          source: &a1
            id: s_KR4KbMbo5WjrLwGk2VkQGn
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 126534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126534&o=json
            external_identifier: CBDB:126534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_48fL9TDe49qrqBH9vKQ1uC
        subject_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1508年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6TRjvzJ9LxxvHwQHqDNsvx
          claim_id: c_48fL9TDe49qrqBH9vKQ1uC
          source_id: s_KR4KbMbo5WjrLwGk2VkQGn
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
        id: c_FRw16bfjEB9fh38GcT5QwE
        subject_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1584年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_byQQ5h5CZYskYKxuq5pai9
          claim_id: c_FRw16bfjEB9fh38GcT5QwE
          source_id: s_KR4KbMbo5WjrLwGk2VkQGn
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
        id: c_gYaNEQKZNqCk4zt7j1qaeC
        subject_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
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
        - id: cs_tuBo443nMM1p6PivSHZiBH
          claim_id: c_gYaNEQKZNqCk4zt7j1qaeC
          source_id: s_KR4KbMbo5WjrLwGk2VkQGn
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
        id: c_fmyhD9WfZGeph0roJyba_X
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L9BEqA5dR7iQfu_5n2FaIk
          claim_id: c_fmyhD9WfZGeph0roJyba_X
          source_id: s_L9QNjobGVNfVRmQosp9J9Q
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L9QNjobGVNfVRmQosp9J9Q
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 304455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304455&o=json
            external_identifier: CBDB:304455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hGzTEBArhtNBmqP8bhoNhy
        status: active
        display_name: 王祿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XaiMQEJrgXgIe7Pe5PwnWz
        subject_person_id: p_3P7MMurQD6yAUfxDy6dUEQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DUd_vOXFTa5smMrkRyYlVN
          claim_id: c_XaiMQEJrgXgIe7Pe5PwnWz
          source_id: s_cR9bN1d58sbx16Jq6BPTn7
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cR9bN1d58sbx16Jq6BPTn7
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 304454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304454&o=json
            external_identifier: CBDB:304454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.714Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3P7MMurQD6yAUfxDy6dUEQ
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_dkbLVSu6qjfRekcglfiAIE
        subject_person_id: p_ijapVPqmZiMmk8QNoAXPjy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JuthQI0kPOp6dxgTlkkuan
          claim_id: c_dkbLVSu6qjfRekcglfiAIE
          source_id: s_2CDqHE5qeD4R81BxekctEH
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百三十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2CDqHE5qeD4R81BxekctEH
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 304453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304453&o=json
            external_identifier: CBDB:304453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ijapVPqmZiMmk8QNoAXPjy
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王材 | accepted |
| birth.date | 1508年 | accepted |
| death.date | 1584年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hGzTEBArhtNBmqP8bhoNhy | 王祿 | accepted |
| ancestors | p_3P7MMurQD6yAUfxDy6dUEQ | 王達 | accepted |
| ancestors | p_ijapVPqmZiMmk8QNoAXPjy | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王材（CBDB 126534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126534&o=json)
- [中国历代人物传记资料库：王達（CBDB 304454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304454&o=json)
- [中国历代人物传记资料库：王鼎（CBDB 304453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304453&o=json)
- [中国历代人物传记资料库：王祿（CBDB 304455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304455&o=json)
