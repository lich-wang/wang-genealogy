---
schema: wang-person/v1
id: p_KXq1hduVe52cAs86EXwmGw
status: active
merged_into: null
display_name: 趙氏
revision: 1
cbdb_id: 38051
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Mz3X-gghQh_jSLdkkMBPO
        subject_person_id: p_KXq1hduVe52cAs86EXwmGw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏，史料所见人物。本项目依据《中国历代人物传记资料库：趙氏(王袤妻)（CBDB 38051）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FU0O_dRdPp23lWxoVHgElR
          claim_id: c_4Mz3X-gghQh_jSLdkkMBPO
          source_id: s_Oxs8idanVMOLGjW2PUnR7O
          stance: supports
          locator: CBDB:38051
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Oxs8idanVMOLGjW2PUnR7O
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王袤妻)（CBDB 38051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38051&o=json
            external_identifier: CBDB:38051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rSmnQSsOYbzJiYJ3ZQGAM8
        subject_person_id: p_KXq1hduVe52cAs86EXwmGw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oOAYXBmggFMcB14wM2qPNR
          claim_id: c_rSmnQSsOYbzJiYJ3ZQGAM8
          source_id: s_Oxs8idanVMOLGjW2PUnR7O
          stance: supports
          locator: CBDB:38051
          quotation: null
          interpretation_note: CBDB 明确记录的王袤配偶
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
        id: c_xoJhRI2QQ_oQis8SzIdUxJ
        subject_person_id: p_xCmtcapjSDVYCibLc3G59X
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KXq1hduVe52cAs86EXwmGw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EtkN7ghJA2-HQ-1p_vmS2j
          claim_id: c_xoJhRI2QQ_oQis8SzIdUxJ
          source_id: s_Oxs8idanVMOLGjW2PUnR7O
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xCmtcapjSDVYCibLc3G59X
        status: active
        display_name: 王袤
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 趙氏，史料所见人物。本项目依据《中国历代人物传记资料库：趙氏(王袤妻)（CBDB 38051）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xCmtcapjSDVYCibLc3G59X | 王袤 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙氏(王袤妻)（CBDB 38051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38051&o=json)
