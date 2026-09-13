---
schema: wang-person/v1
id: p_nxJFc4B8M3dbCmgETXFL25
status: active
merged_into: null
display_name: 王叔元
cbdb_id: 56206
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_roLchVysJgXUPHt338usPa
        subject_person_id: p_nxJFc4B8M3dbCmgETXFL25
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔元，史料所见人物。本项目依据《中国历代人物传记资料库：王叔元（CBDB 56206）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_VNO6CGWcjoKXwSAruFX7hW
          claim_id: c_roLchVysJgXUPHt338usPa
          source_id: s_tb2Bof6L5ny9345bhuzP6r
          stance: supports
          locator: CBDB:56206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_tb2Bof6L5ny9345bhuzP6r
            source_type: api_record
            title: 中国历代人物传记资料库：王叔元（CBDB 56206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56206&o=json
            external_identifier: CBDB:56206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7LC1T9E6fAHH9X1Vpqd9Nm
        subject_person_id: p_nxJFc4B8M3dbCmgETXFL25
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6n9SPYxCa2dSHF3Uz93LP3
          claim_id: c_7LC1T9E6fAHH9X1Vpqd9Nm
          source_id: s_tb2Bof6L5ny9345bhuzP6r
          stance: supports
          locator: CBDB:56206
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_hGCWLMFU1ACV5wHgZeGjA1
        subject_person_id: p_nxJFc4B8M3dbCmgETXFL25
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RrLAmAJ53wbERRsLzaVq3N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k2ZLuKfn_SLfjX_WXvWb5j
          claim_id: c_hGCWLMFU1ACV5wHgZeGjA1
          source_id: s_ueKRmgQtBBGaX8bNh3YAmE
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #659, HuWenKai #242：祖父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ueKRmgQtBBGaX8bNh3YAmE
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 56203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56203&o=json
            external_identifier: CBDB:56203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RrLAmAJ53wbERRsLzaVq3N
        status: active
        display_name: 王煒
        merged_into_person_id: null
  other: []
---

# 王叔元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王叔元，史料所见人物。本项目依据《中国历代人物传记资料库：王叔元（CBDB 56206）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王叔元 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RrLAmAJ53wbERRsLzaVq3N | 王煒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叔元（CBDB 56206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56206&o=json)
- [中国历代人物传记资料库：王煒（CBDB 56203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56203&o=json)
