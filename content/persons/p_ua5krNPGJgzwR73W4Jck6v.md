---
schema: wang-person/v1
id: p_ua5krNPGJgzwR73W4Jck6v
status: active
merged_into: null
display_name: 王友諒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q1Y2VZ18Qck7W6Q7mYWaEP
        subject_person_id: p_ua5krNPGJgzwR73W4Jck6v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友諒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jUMkPm7jMy5soFCkQvxew9
          claim_id: c_q1Y2VZ18Qck7W6Q7mYWaEP
          source_id: s_R9yqVNhqdncnoYKQyu7izx
          stance: supports
          locator: CBDB:241082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241082）
          source: &a1
            id: s_R9yqVNhqdncnoYKQyu7izx
            source_type: api_record
            title: 中国历代人物传记资料库：王友諒（CBDB 241082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241082&o=json
            external_identifier: CBDB:241082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eLF352exEevN2L1rHPqPuj
        subject_person_id: p_ua5krNPGJgzwR73W4Jck6v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友諒，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 241082）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0TtnlUOB1d_u73-lOWlG61
          claim_id: c_eLF352exEevN2L1rHPqPuj
          source_id: s_R9yqVNhqdncnoYKQyu7izx
          stance: supports
          locator: CBDB:241082
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
        id: c_xqEaNcMCR4vgkkM8Am6aXY
        subject_person_id: p_ua5krNPGJgzwR73W4Jck6v
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HYHpKaJa17iu8Upo6wdU7W
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HDu3n9wFGjB2I1qcxFeIfQ
          claim_id: c_xqEaNcMCR4vgkkM8Am6aXY
          source_id: s_R9yqVNhqdncnoYKQyu7izx
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第五十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HYHpKaJa17iu8Upo6wdU7W
        status: active
        display_name: 王育
        merged_into_person_id: null
  other: []
---

# 王友諒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友諒 | accepted |
| bio.summary | 王友諒，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 241082） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HYHpKaJa17iu8Upo6wdU7W | 王育 | accepted |

## 外部来源

- [中国历代人物传记资料库：王友諒（CBDB 241082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241082&o=json)
