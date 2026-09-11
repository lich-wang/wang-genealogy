---
schema: wang-person/v1
id: p_5uAkAECaScafGC6cKLVcv2
status: active
merged_into: null
display_name: 王焯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hLaM4NxfMGCYE75aEXkpF6
        subject_person_id: p_5uAkAECaScafGC6cKLVcv2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fjpPdLHFivUmmqHdECHHEr
          claim_id: c_hLaM4NxfMGCYE75aEXkpF6
          source_id: s_ZRefVZDxvJ3Dy3dX6oRH8W
          stance: supports
          locator: CBDB:531420
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（531420）
          source: &a1
            id: s_ZRefVZDxvJ3Dy3dX6oRH8W
            source_type: api_record
            title: 中国历代人物传记资料库：王焯（CBDB 531420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531420&o=json
            external_identifier: CBDB:531420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z2eQr5fpr6hk3k5qVoh1Vn
        subject_person_id: p_5uAkAECaScafGC6cKLVcv2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王焯，宋人物。籍贯遂寧，入仕進士。（中国历代人物传记资料库 CBDB 531420）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VXfXnlMyDFdjQYzeK5Z0OZ
          claim_id: c_z2eQr5fpr6hk3k5qVoh1Vn
          source_id: s_ZRefVZDxvJ3Dy3dX6oRH8W
          stance: supports
          locator: CBDB:531420
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

# 王焯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王焯 | accepted |
| bio.summary | 王焯，宋人物。籍贯遂寧，入仕進士。（中国历代人物传记资料库 CBDB 531420） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王焯（CBDB 531420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531420&o=json)
