---
schema: wang-person/v1
id: p_dQLW2DU6wcXrAH9yQBEoiD
status: active
merged_into: null
display_name: 王邁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pRZgYx1CoRwKzppNQng953
        subject_person_id: p_dQLW2DU6wcXrAH9yQBEoiD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eAoL7qFYA3eyh2yLtGsWhs
          claim_id: c_pRZgYx1CoRwKzppNQng953
          source_id: s_Qie33HzvWVQK6B47wqCNR1
          stance: supports
          locator: CBDB:22116
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22116）
          source: &a1
            id: s_Qie33HzvWVQK6B47wqCNR1
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 22116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22116&o=json
            external_identifier: CBDB:22116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ijMw7331v3UYhvr24BaFtD
        subject_person_id: p_dQLW2DU6wcXrAH9yQBEoiD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邁，宋人物。籍贯崑山，入仕進士。（中国历代人物传记资料库 CBDB 22116）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z7AJbA-7Eb4szbVVBl-oRJ
          claim_id: c_ijMw7331v3UYhvr24BaFtD
          source_id: s_Qie33HzvWVQK6B47wqCNR1
          stance: supports
          locator: CBDB:22116
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_axnlXs75EkyhFW8z4pH51E
        subject_person_id: p_dQLW2DU6wcXrAH9yQBEoiD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PvTkvufzM52QMToQSVL7Mg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dR8y6l3DRsZ5y7obdEORrH
          claim_id: c_axnlXs75EkyhFW8z4pH51E
          source_id: s_Qie33HzvWVQK6B47wqCNR1
          stance: supports
          locator: 宋人傳記資料索引(電子版)，611：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PvTkvufzM52QMToQSVL7Mg
        status: active
        display_name: 王圭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王邁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邁 | accepted |
| bio.summary | 王邁，宋人物。籍贯崑山，入仕進士。（中国历代人物传记资料库 CBDB 22116） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PvTkvufzM52QMToQSVL7Mg | 王圭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邁（CBDB 22116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22116&o=json)
