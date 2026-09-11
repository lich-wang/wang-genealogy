---
schema: wang-person/v1
id: p_YGe3bqNnuZ2RBPkGV1co5N
status: active
merged_into: null
display_name: 王世忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ow9HdNA1QPyAgVSp4bcey5
        subject_person_id: p_YGe3bqNnuZ2RBPkGV1co5N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JbYNFeG5cXGdkC5sS8UYmJ
          claim_id: c_ow9HdNA1QPyAgVSp4bcey5
          source_id: s_3CL2Zx2nZ6Cb4VR9KZ2k5Q
          stance: supports
          locator: CBDB:71459
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71459）
          source: &a1
            id: s_3CL2Zx2nZ6Cb4VR9KZ2k5Q
            source_type: api_record
            title: 中国历代人物传记资料库：王世忠（CBDB 71459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71459&o=json
            external_identifier: CBDB:71459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RbbANeecQwaLNpwuen1sWb
        subject_person_id: p_YGe3bqNnuZ2RBPkGV1co5N
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1856年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pFPwNbpcHTfn5hAQ2BgPq1
          claim_id: c_RbbANeecQwaLNpwuen1sWb
          source_id: s_3CL2Zx2nZ6Cb4VR9KZ2k5Q
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
        id: c_1gPYgJD7KqbGz6eqNPh726
        subject_person_id: p_YGe3bqNnuZ2RBPkGV1co5N
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1915年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RHEdLLASyVvpRJGihuDRWQ
          claim_id: c_1gPYgJD7KqbGz6eqNPh726
          source_id: s_3CL2Zx2nZ6Cb4VR9KZ2k5Q
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
        id: c_DACVmC162er1QXBSgm56K3
        subject_person_id: p_YGe3bqNnuZ2RBPkGV1co5N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世忠（1856年—1915年），中華民國人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71459）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_psvDUBmrls8V-Xf5Ao4bT8
          claim_id: c_DACVmC162er1QXBSgm56K3
          source_id: s_3CL2Zx2nZ6Cb4VR9KZ2k5Q
          stance: supports
          locator: CBDB:71459
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世忠 | accepted |
| birth.date | 1856年 | accepted |
| death.date | 1915年 | accepted |
| bio.summary | 王世忠（1856年—1915年），中華民國人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71459） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世忠（CBDB 71459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71459&o=json)
