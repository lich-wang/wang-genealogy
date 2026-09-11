---
schema: wang-person/v1
id: p_2dGLq9M3r4GA9DiCamnk1q
status: active
merged_into: null
display_name: 王操
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KdG8JyJUd3KvmxyjcG5Ve8
        subject_person_id: p_2dGLq9M3r4GA9DiCamnk1q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王操
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7s49wUiUbVtNUm5ccjbbAN
          claim_id: c_KdG8JyJUd3KvmxyjcG5Ve8
          source_id: s_9JFP88AJPAVEp3RLvSjawu
          stance: supports
          locator: CBDB:140261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140261）
          source: &a1
            id: s_9JFP88AJPAVEp3RLvSjawu
            source_type: api_record
            title: 中国历代人物传记资料库：王操（CBDB 140261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140261&o=json
            external_identifier: CBDB:140261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.489Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xqAMR65GE1D94zaaLh2taf
        subject_person_id: p_2dGLq9M3r4GA9DiCamnk1q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 620年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yVoDaSa6JkNyWc1W85JVgU
          claim_id: c_xqAMR65GE1D94zaaLh2taf
          source_id: s_9JFP88AJPAVEp3RLvSjawu
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
        id: c_NuMTkvAKqdCqBePC6Zc8yB
        subject_person_id: p_2dGLq9M3r4GA9DiCamnk1q
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 670年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4WSLP31YtnRAMkzQGxd3nT
          claim_id: c_NuMTkvAKqdCqBePC6Zc8yB
          source_id: s_9JFP88AJPAVEp3RLvSjawu
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
        id: c_kPXC8Wbnj7nZrGpRrF7i6T
        subject_person_id: p_2dGLq9M3r4GA9DiCamnk1q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qgvz9E31WGHJiPoswuCeqd
          claim_id: c_kPXC8Wbnj7nZrGpRrF7i6T
          source_id: s_9JFP88AJPAVEp3RLvSjawu
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
        id: c_zzopjFs2kAxx8rbHKfc7G0
        subject_person_id: p_9374kqWeseAGPFDFmR8DXT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2dGLq9M3r4GA9DiCamnk1q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zLx8XwP6-k-1j5QyzbA-Mh
          claim_id: c_zzopjFs2kAxx8rbHKfc7G0
          source_id: s_9JFP88AJPAVEp3RLvSjawu
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 34：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9374kqWeseAGPFDFmR8DXT
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王操

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王操 | accepted |
| birth.date | 620年 | accepted |
| death.date | 670年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9374kqWeseAGPFDFmR8DXT | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王操（CBDB 140261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140261&o=json)
