---
schema: wang-person/v1
id: p_wwsmr7wMfyJLczTWSDME98
status: active
merged_into: null
display_name: 王侃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iZzPD4FWbzDJSJJF4UsLSc
        subject_person_id: p_wwsmr7wMfyJLczTWSDME98
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MVCcZYk6uFseTSBaDcGWTd
          claim_id: c_iZzPD4FWbzDJSJJF4UsLSc
          source_id: s_U4FGt22kS4ECUWX1gK71KD
          stance: supports
          locator: CBDB:508756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508756）
          source: &a1
            id: s_U4FGt22kS4ECUWX1gK71KD
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 508756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508756&o=json
            external_identifier: CBDB:508756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xew4RPf4NX2F3V2L3CFnpH
        subject_person_id: p_wwsmr7wMfyJLczTWSDME98
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王侃，明人物。入仕學校: 生員(庠生)，曾任典史。（中国历代人物传记资料库 CBDB 508756）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6JYcgATy5rk93Z1x5WGbgF
          claim_id: c_Xew4RPf4NX2F3V2L3CFnpH
          source_id: s_U4FGt22kS4ECUWX1gK71KD
          stance: supports
          locator: CBDB:508756
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

# 王侃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侃 | accepted |
| bio.summary | 王侃，明人物。入仕學校: 生員(庠生)，曾任典史。（中国历代人物传记资料库 CBDB 508756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王侃（CBDB 508756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508756&o=json)
