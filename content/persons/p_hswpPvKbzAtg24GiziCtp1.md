---
schema: wang-person/v1
id: p_hswpPvKbzAtg24GiziCtp1
status: active
merged_into: null
display_name: 王鏞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vRqDPsyUGPKfNpkCbzszCc
        subject_person_id: p_hswpPvKbzAtg24GiziCtp1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yLaBHaEY6G12Q8X6uvAhKs
          claim_id: c_vRqDPsyUGPKfNpkCbzszCc
          source_id: s_w5pfbTmuXssnF7qiBLmcoG
          stance: supports
          locator: CBDB:314530
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314530）
          source: &a1
            id: s_w5pfbTmuXssnF7qiBLmcoG
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 314530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314530&o=json
            external_identifier: CBDB:314530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rzdrxDpGyQ61z5M8RmLu43
        subject_person_id: p_hswpPvKbzAtg24GiziCtp1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MyakNUoWdsKkPJPkANgadb
          claim_id: c_rzdrxDpGyQ61z5M8RmLu43
          source_id: s_w5pfbTmuXssnF7qiBLmcoG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_ROwzxHPxRsEF1fzElyVJsb
        subject_person_id: p_hswpPvKbzAtg24GiziCtp1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_SGWPi4n8QUjY5AE1caMiEq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iQoAR-oID9Jnr6APSzCgen
          claim_id: c_ROwzxHPxRsEF1fzElyVJsb
          source_id: s_w5pfbTmuXssnF7qiBLmcoG
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SGWPi4n8QUjY5AE1caMiEq
        status: active
        display_name: 王傑
        merged_into_person_id: null
  other: []
---

# 王鏞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_SGWPi4n8QUjY5AE1caMiEq | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鏞（CBDB 314530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314530&o=json)
