---
schema: wang-person/v1
id: p_PADhC3kPizKDbh6s6tqmfH
status: active
merged_into: null
display_name: 王玘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GVZyuuMmZNCykX7eh25HCB
        subject_person_id: p_PADhC3kPizKDbh6s6tqmfH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7DVYB1RqE7sSN41reSy4WP
          claim_id: c_GVZyuuMmZNCykX7eh25HCB
          source_id: s_brMtNfQPBQBrG9k3XkY9v7
          stance: supports
          locator: CBDB:306645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306645）
          source: &a1
            id: s_brMtNfQPBQBrG9k3XkY9v7
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 306645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306645&o=json
            external_identifier: CBDB:306645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TCo7hSKtEDVDqFkLE7VcZW
        subject_person_id: p_PADhC3kPizKDbh6s6tqmfH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 306645）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x6daIL9x4a7iBb_PYsP2si
          claim_id: c_TCo7hSKtEDVDqFkLE7VcZW
          source_id: s_brMtNfQPBQBrG9k3XkY9v7
          stance: supports
          locator: CBDB:306645
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
        id: c_bxH8ukUTo7inWf-WG0BeYm
        subject_person_id: p_PADhC3kPizKDbh6s6tqmfH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nMTfTHCiK68GBCA9Zmyxva
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TIGR9OVuX2BfzTfJlMyCBi
          claim_id: c_bxH8ukUTo7inWf-WG0BeYm
          source_id: s_brMtNfQPBQBrG9k3XkY9v7
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第四十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nMTfTHCiK68GBCA9Zmyxva
        status: active
        display_name: 王光祖
        merged_into_person_id: null
  other: []
---

# 王玘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玘 | accepted |
| bio.summary | 王玘，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 306645） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_nMTfTHCiK68GBCA9Zmyxva | 王光祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玘（CBDB 306645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306645&o=json)
