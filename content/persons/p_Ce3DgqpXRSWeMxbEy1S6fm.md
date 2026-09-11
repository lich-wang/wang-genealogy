---
schema: wang-person/v1
id: p_Ce3DgqpXRSWeMxbEy1S6fm
status: active
merged_into: null
display_name: 王宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9PmBBmsbuJooozajD6xPN9
        subject_person_id: p_Ce3DgqpXRSWeMxbEy1S6fm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CJvrDLjk2f756Ena2tzZhE
          claim_id: c_9PmBBmsbuJooozajD6xPN9
          source_id: s_15AzHDy3cBLhJd6wkHK5X8
          stance: supports
          locator: CBDB:303241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303241）
          source: &a1
            id: s_15AzHDy3cBLhJd6wkHK5X8
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 303241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303241&o=json
            external_identifier: CBDB:303241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bM1P7e1cQa66Ku1VfotW1d
        subject_person_id: p_Ce3DgqpXRSWeMxbEy1S6fm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗，明人物。嘉靖二十年進士，曾任奉政大夫、知縣、治中。（中国历代人物传记资料库 CBDB 303241）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_avANXnN-e2KusNpbTQom7Z
          claim_id: c_bM1P7e1cQa66Ku1VfotW1d
          source_id: s_15AzHDy3cBLhJd6wkHK5X8
          stance: supports
          locator: CBDB:303241
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
        id: c_CwIao_J7GiYT9qiKtQRwEs
        subject_person_id: p_Ce3DgqpXRSWeMxbEy1S6fm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_epPvqgMmGoGqHpEYGAeBox
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B4pD3STg3dKqq7_VnQcAzB
          claim_id: c_CwIao_J7GiYT9qiKtQRwEs
          source_id: s_15AzHDy3cBLhJd6wkHK5X8
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_epPvqgMmGoGqHpEYGAeBox
        status: active
        display_name: 王顯忠
        merged_into_person_id: null
  other: []
---

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | 王宗，明人物。嘉靖二十年進士，曾任奉政大夫、知縣、治中。（中国历代人物传记资料库 CBDB 303241） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_epPvqgMmGoGqHpEYGAeBox | 王顯忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗（CBDB 303241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303241&o=json)
