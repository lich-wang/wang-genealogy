---
schema: wang-person/v1
id: p_gu94NySfSZGB2sdYaaiAsL
status: active
merged_into: null
display_name: 王稢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1GBBBPUdypcpCRYBBFDUyR
        subject_person_id: p_gu94NySfSZGB2sdYaaiAsL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T35uA2GV5ttTdAbVinxtsG
          claim_id: c_1GBBBPUdypcpCRYBBFDUyR
          source_id: s_4mBGgdNJA9X29a5hgrxtxA
          stance: supports
          locator: CBDB:527065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527065）
          source: &a1
            id: s_4mBGgdNJA9X29a5hgrxtxA
            source_type: api_record
            title: 中国历代人物传记资料库：王稢（CBDB 527065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527065&o=json
            external_identifier: CBDB:527065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m8qLf6UhLRRp1eNZXhfmU5
        subject_person_id: p_gu94NySfSZGB2sdYaaiAsL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稢，史料所见人物。本项目依据《中国历代人物传记资料库：王稢（CBDB 527065）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1SwGtoUsCsM48ARl0_HiUY
          claim_id: c_m8qLf6UhLRRp1eNZXhfmU5
          source_id: s_4mBGgdNJA9X29a5hgrxtxA
          stance: supports
          locator: CBDB:527065
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_O6DTnroWQccm20sQoTWNzF
        subject_person_id: p_oZS1XpKQaQAcuLEyVp74rc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gu94NySfSZGB2sdYaaiAsL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OMSabHqaBrz_BcpnIf9Z3U
          claim_id: c_O6DTnroWQccm20sQoTWNzF
          source_id: s_4mBGgdNJA9X29a5hgrxtxA
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13223：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oZS1XpKQaQAcuLEyVp74rc
        status: active
        display_name: 王繻
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王稢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稢 | accepted |
| bio.summary | 王稢，史料所见人物。本项目依据《中国历代人物传记资料库：王稢（CBDB 527065）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_oZS1XpKQaQAcuLEyVp74rc | 王繻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稢（CBDB 527065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527065&o=json)
