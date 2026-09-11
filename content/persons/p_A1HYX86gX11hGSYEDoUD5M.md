---
schema: wang-person/v1
id: p_A1HYX86gX11hGSYEDoUD5M
status: active
merged_into: null
display_name: 張仲莊
revision: 1
cbdb_id: 17738
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EPo6nCExT_oWFJE9aOttWf
        subject_person_id: p_A1HYX86gX11hGSYEDoUD5M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張仲莊，宋人物。籍贯開封，曾任太常寺博士、左正議大夫、尚書省兵部職方司員外郎。（中国历代人物传记资料库 CBDB 17738）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nvlm-T7smFzympHKMjgEbR
          claim_id: c_EPo6nCExT_oWFJE9aOttWf
          source_id: s_a-LfAWG0JfO6S4T6hHL_Z2
          stance: supports
          locator: CBDB:17738
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_a-LfAWG0JfO6S4T6hHL_Z2
            source_type: api_record
            title: 中国历代人物传记资料库：張仲莊（CBDB 17738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17738&o=json
            external_identifier: CBDB:17738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X4LnyDsq3oSFISfTVim_IB
        subject_person_id: p_A1HYX86gX11hGSYEDoUD5M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張仲莊
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bhggUhgiPHkZOMEAvMPzme
          claim_id: c_X4LnyDsq3oSFISfTVim_IB
          source_id: s_a-LfAWG0JfO6S4T6hHL_Z2
          stance: supports
          locator: CBDB:17738
          quotation: null
          interpretation_note: CBDB 明确记录的王縣太君配偶
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
        id: c_2g8XlIaiWTS16f9Z0mnWya
        subject_person_id: p_dsdniay6HN8L8kYY9dkiZB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_A1HYX86gX11hGSYEDoUD5M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRO68mO5R4ahPyHu9lFLOK
          claim_id: c_2g8XlIaiWTS16f9Z0mnWya
          source_id: s_a-LfAWG0JfO6S4T6hHL_Z2
          stance: supports
          locator: 宋人傳記資料索引(電子版)，13084;13085：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dsdniay6HN8L8kYY9dkiZB
        status: active
        display_name: 王縣太君
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張仲莊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張仲莊，宋人物。籍贯開封，曾任太常寺博士、左正議大夫、尚書省兵部職方司員外郎。（中国历代人物传记资料库 CBDB 17738） | accepted |
| name.primary | 張仲莊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dsdniay6HN8L8kYY9dkiZB | 王縣太君 | accepted |

## 外部来源

- [中国历代人物传记资料库：張仲莊（CBDB 17738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17738&o=json)
