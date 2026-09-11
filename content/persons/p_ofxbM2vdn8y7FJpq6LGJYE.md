---
schema: wang-person/v1
id: p_ofxbM2vdn8y7FJpq6LGJYE
status: active
merged_into: null
display_name: 王侗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KzvigtByBkTFDYgDDN19Qc
        subject_person_id: p_ofxbM2vdn8y7FJpq6LGJYE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aZvJjFJ1H58wrrjiowAxQ4
          claim_id: c_KzvigtByBkTFDYgDDN19Qc
          source_id: s_ZkeRrXueLQ8NDbgh1ktAea
          stance: supports
          locator: CBDB:39534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39534）
          source: &a1
            id: s_ZkeRrXueLQ8NDbgh1ktAea
            source_type: api_record
            title: 中国历代人物传记资料库：王侗（CBDB 39534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39534&o=json
            external_identifier: CBDB:39534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u8SsLBSp8oPL6HPsRy1QBR
        subject_person_id: p_ofxbM2vdn8y7FJpq6LGJYE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侗，宋人物。籍贯浚儀，入仕進士，曾任尚書省刑部都官司員外郎。（中国历代人物传记资料库 CBDB 39534）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XQOAUax9dPHkQ37TjVq_wU
          claim_id: c_u8SsLBSp8oPL6HPsRy1QBR
          source_id: s_ZkeRrXueLQ8NDbgh1ktAea
          stance: supports
          locator: CBDB:39534
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ovWMQAvCO-mtUcpmLJySMe
        subject_person_id: p_Cp5VJGjxw9yctx32HyVBDx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ofxbM2vdn8y7FJpq6LGJYE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-vy3xvPDHbUH4p3h0BlaXg
          claim_id: c_ovWMQAvCO-mtUcpmLJySMe
          source_id: s_2eZdE8NMR8pMg632BXaVt3
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2eZdE8NMR8pMg632BXaVt3
            source_type: api_record
            title: 中国历代人物传记资料库：王格（CBDB 39536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39536&o=json
            external_identifier: CBDB:39536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Cp5VJGjxw9yctx32HyVBDx
        status: active
        display_name: 王格
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王侗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侗 | accepted |
| bio.summary | 王侗，宋人物。籍贯浚儀，入仕進士，曾任尚書省刑部都官司員外郎。（中国历代人物传记资料库 CBDB 39534） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Cp5VJGjxw9yctx32HyVBDx | 王格 | accepted |

## 外部来源

- [中国历代人物传记资料库：王侗（CBDB 39534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39534&o=json)
- [中国历代人物传记资料库：王格（CBDB 39536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39536&o=json)
