---
schema: wang-person/v1
id: p_ZAALGmvA7VXjgxTSp3NT6Q
status: active
merged_into: null
display_name: 王讓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LKKirW3Fj6DtGAbRtzMJrV
        subject_person_id: p_ZAALGmvA7VXjgxTSp3NT6Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9B8uQHZAEikUe1ZnBMPnGh
          claim_id: c_LKKirW3Fj6DtGAbRtzMJrV
          source_id: s_SHTgHQoKvBrhZ5yqgifaFq
          stance: supports
          locator: CBDB:280588
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280588）
          source: &a1
            id: s_SHTgHQoKvBrhZ5yqgifaFq
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 280588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280588&o=json
            external_identifier: CBDB:280588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_goGxT4JvLKdhzwDsyuCDur
        subject_person_id: p_ZAALGmvA7VXjgxTSp3NT6Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讓，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 280588）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pjny1PePeStq1SRXbwEl9-
          claim_id: c_goGxT4JvLKdhzwDsyuCDur
          source_id: s_SHTgHQoKvBrhZ5yqgifaFq
          stance: supports
          locator: CBDB:280588
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
  descendants:
    - claim:
        id: c_4H5kuJB8spFCThTDtynlMH
        subject_person_id: p_ZAALGmvA7VXjgxTSp3NT6Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kCdr4Vt3ng3vFN4WR6C2uB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2sJyhU4JRIa_Qx2qZuJH9_
          claim_id: c_4H5kuJB8spFCThTDtynlMH
          source_id: s_SHTgHQoKvBrhZ5yqgifaFq
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第一百一十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kCdr4Vt3ng3vFN4WR6C2uB
        status: active
        display_name: 王尚志
        merged_into_person_id: null
  other: []
---

# 王讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王讓 | accepted |
| bio.summary | 王讓，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 280588） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kCdr4Vt3ng3vFN4WR6C2uB | 王尚志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王讓（CBDB 280588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280588&o=json)
