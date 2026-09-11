---
schema: wang-person/v1
id: p_xDdE3Z2c4asayfnNSJiqH6
status: active
merged_into: null
display_name: 畢著
revision: 1
cbdb_id: 55134
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E-KX2sVC0kYF4zjTVxNJTP
        subject_person_id: p_xDdE3Z2c4asayfnNSJiqH6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 畢著（生於1618），清人物。籍贯歙縣，身份为收徒講學、武藝。（中国历代人物传记资料库 CBDB 55134）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hgEW_WGdml9GcB5A2YWVhV
          claim_id: c_E-KX2sVC0kYF4zjTVxNJTP
          source_id: s_RLUdZqiQNcgjqsDkK60n4d
          stance: supports
          locator: CBDB:55134
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RLUdZqiQNcgjqsDkK60n4d
            source_type: api_record
            title: 中国历代人物传记资料库：畢著（CBDB 55134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55134&o=json
            external_identifier: CBDB:55134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zFf0GdsKhsvS54sbn-RNdX
        subject_person_id: p_xDdE3Z2c4asayfnNSJiqH6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 畢著
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qqSiRyU1EdHlx6yIrjZzJ0
          claim_id: c_zFf0GdsKhsvS54sbn-RNdX
          source_id: s_RLUdZqiQNcgjqsDkK60n4d
          stance: supports
          locator: CBDB:55134
          quotation: null
          interpretation_note: CBDB 明确记录的王聖開配偶
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
        id: c_RWclFPhtsxa3xFsesazAHW
        subject_person_id: p_VARpVfVFQko2Whez94zV3H
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xDdE3Z2c4asayfnNSJiqH6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vEyiezuTxkar5emtGMfMlW
          claim_id: c_RWclFPhtsxa3xFsesazAHW
          source_id: s_RLUdZqiQNcgjqsDkK60n4d
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #497, HuWenKai #548：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VARpVfVFQko2Whez94zV3H
        status: active
        display_name: 王聖開
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 畢著

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 畢著（生於1618），清人物。籍贯歙縣，身份为收徒講學、武藝。（中国历代人物传记资料库 CBDB 55134） | accepted |
| name.primary | 畢著 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_VARpVfVFQko2Whez94zV3H | 王聖開 | accepted |

## 外部来源

- [中国历代人物传记资料库：畢著（CBDB 55134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55134&o=json)
