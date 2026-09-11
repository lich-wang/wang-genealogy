---
schema: wang-person/v1
id: p_5V15QYsZZEwGMxSKSmHbYU
status: active
merged_into: null
display_name: 王護兒
cbdb_id: 168574
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4ujYDq8A6CLxfVMQ1Zuxa4
        subject_person_id: p_5V15QYsZZEwGMxSKSmHbYU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王護兒，唐人物。中国历代人物传记资料库（CBDB）以人物编号 168574 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_w64AJoE1bAVWdKf6j7DcG-
          claim_id: c_4ujYDq8A6CLxfVMQ1Zuxa4
          source_id: s_sM95eR6aivKoXrqLxS1RQa
          stance: supports
          locator: CBDB:168574
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sM95eR6aivKoXrqLxS1RQa
            source_type: api_record
            title: 中国历代人物传记资料库：王護兒（CBDB 168574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168574&o=json
            external_identifier: CBDB:168574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PpCo6cBZGNrRs1XSK25yVs
        subject_person_id: p_5V15QYsZZEwGMxSKSmHbYU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王護兒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PcH3q6cvzLahEpADhW7feo
          claim_id: c_PpCo6cBZGNrRs1XSK25yVs
          source_id: s_sM95eR6aivKoXrqLxS1RQa
          stance: supports
          locator: CBDB:168574
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_sM95eR6aivKoXrqLxS1RQa
            source_type: api_record
            title: 中国历代人物传记资料库：王護兒（CBDB 168574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168574&o=json
            external_identifier: CBDB:168574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dbq20YoBWv4LuZcxmdTYhk
        subject_person_id: p_YsPayRFH97RfRhHgyPnWty
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5V15QYsZZEwGMxSKSmHbYU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ugzuGXon79ceyAh3CrT_6
          claim_id: c_dbq20YoBWv4LuZcxmdTYhk
          source_id: s_sM95eR6aivKoXrqLxS1RQa
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Qianfu8：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YsPayRFH97RfRhHgyPnWty
        status: active
        display_name: 王幼虞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王護兒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王護兒，唐人物。中国历代人物传记资料库（CBDB）以人物编号 168574 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王護兒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YsPayRFH97RfRhHgyPnWty | 王幼虞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王護兒（CBDB 168574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168574&o=json)
