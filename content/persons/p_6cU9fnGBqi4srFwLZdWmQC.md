---
schema: wang-person/v1
id: p_6cU9fnGBqi4srFwLZdWmQC
status: active
merged_into: null
display_name: 王居中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2yb2CnvoNLu4VWBNEzCrX8
        subject_person_id: p_6cU9fnGBqi4srFwLZdWmQC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vd2dHFYE8ivKjxT1kbCSQ4
          claim_id: c_2yb2CnvoNLu4VWBNEzCrX8
          source_id: s_bxA7916hFcqDWCXV29JLHg
          stance: supports
          locator: CBDB:24482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（24482）
          source: &a1
            id: s_bxA7916hFcqDWCXV29JLHg
            source_type: api_record
            title: 中国历代人物传记资料库：王居中（CBDB 24482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24482&o=json
            external_identifier: CBDB:24482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RL2AvagKkr13XRE3SADv6r
        subject_person_id: p_6cU9fnGBqi4srFwLZdWmQC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居中，宋人物。籍贯臨海。（中国历代人物传记资料库 CBDB 24482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1V3xudhchdFkfDB5L3mSIW
          claim_id: c_RL2AvagKkr13XRE3SADv6r
          source_id: s_bxA7916hFcqDWCXV29JLHg
          stance: supports
          locator: CBDB:24482
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YG_HBE6Hqhvjc_qc9iI0_y
        subject_person_id: p_2iVh2dnQYp8qHcVzsHx44b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6cU9fnGBqi4srFwLZdWmQC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_flOSmb6y4AaZQ3wIDe1iMx
          claim_id: c_YG_HBE6Hqhvjc_qc9iI0_y
          source_id: s_tgPMxFjgwwfqdHmDpnjkqj
          stance: supports
          locator: CBDB 双向互证（子 王居中 ⇄ 父 王安仁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_tgPMxFjgwwfqdHmDpnjkqj
            source_type: api_record
            title: 中国历代人物传记资料库：王安仁（CBDB 22136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22136&o=json
            external_identifier: CBDB:22136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2iVh2dnQYp8qHcVzsHx44b
        status: active
        display_name: 王安仁
        merged_into_person_id: null
  children:
    - claim:
        id: c_TsBZRWbRE4am5k-cZspMA8
        subject_person_id: p_6cU9fnGBqi4srFwLZdWmQC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b8SGcyTheZi2msHVoNPNmG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7oJBS0mYRzZJ96Y4nO0DYl
          claim_id: c_TsBZRWbRE4am5k-cZspMA8
          source_id: s_bxA7916hFcqDWCXV29JLHg
          stance: supports
          locator: CBDB 双向互证（子 王庭筠 ⇄ 父 王居中）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_b8SGcyTheZi2msHVoNPNmG
        status: active
        display_name: 王庭筠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王居中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居中 | accepted |
| bio.summary | 王居中，宋人物。籍贯臨海。（中国历代人物传记资料库 CBDB 24482） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2iVh2dnQYp8qHcVzsHx44b | 王安仁 | accepted |
| children | p_b8SGcyTheZi2msHVoNPNmG | 王庭筠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安仁（CBDB 22136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22136&o=json)
- [中国历代人物传记资料库：王居中（CBDB 24482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24482&o=json)
