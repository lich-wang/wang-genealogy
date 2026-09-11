---
schema: wang-person/v1
id: p_pmQJDCJLQnLCyKY6yHZW2L
status: active
merged_into: null
display_name: 屈蕙纕
revision: 1
cbdb_id: 55563
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_lQr_IP4FATXrwXFQX5bbwA
        subject_person_id: p_pmQJDCJLQnLCyKY6yHZW2L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 屈蕙纕（1862—1929），中華民國人物。籍贯臨海。（中国历代人物传记资料库 CBDB 55563）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J5hpFmBEvgM2BtcLjzFP1w
          claim_id: c_lQr_IP4FATXrwXFQX5bbwA
          source_id: s_kedjjCQZcfEUoA2zilrQ4B
          stance: supports
          locator: CBDB:55563
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kedjjCQZcfEUoA2zilrQ4B
            source_type: api_record
            title: 中国历代人物传记资料库：屈蕙纕（CBDB 55563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55563&o=json
            external_identifier: CBDB:55563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zyMDJ-J09Rfu74bnJ_fWVg
        subject_person_id: p_pmQJDCJLQnLCyKY6yHZW2L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 屈蕙纕
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CF2zR1oQeeHCUBpHk-9f1a
          claim_id: c_zyMDJ-J09Rfu74bnJ_fWVg
          source_id: s_kedjjCQZcfEUoA2zilrQ4B
          stance: supports
          locator: CBDB:55563
          quotation: null
          interpretation_note: CBDB 明确记录的王詠霓配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2ESNuRMNR368t89nJ04tGJ
        subject_person_id: p_Y8d1ZqFP3JJLyjCBSMWV59
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pmQJDCJLQnLCyKY6yHZW2L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fhd7AqlCJq0tynFwpDYjRz
          claim_id: c_2ESNuRMNR368t89nJ04tGJ
          source_id: s_kedjjCQZcfEUoA2zilrQ4B
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #247, HuWenKai #393：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y8d1ZqFP3JJLyjCBSMWV59
        status: active
        display_name: 王詠霓
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 屈蕙纕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 屈蕙纕（1862—1929），中華民國人物。籍贯臨海。（中国历代人物传记资料库 CBDB 55563） | accepted |
| name.primary | 屈蕙纕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Y8d1ZqFP3JJLyjCBSMWV59 | 王詠霓 | accepted |

## 外部来源

- [中国历代人物传记资料库：屈蕙纕（CBDB 55563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55563&o=json)
