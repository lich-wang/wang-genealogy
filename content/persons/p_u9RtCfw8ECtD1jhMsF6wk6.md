---
schema: wang-person/v1
id: p_u9RtCfw8ECtD1jhMsF6wk6
status: active
merged_into: null
display_name: 王三省
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XjakbSHXVYhK7oY6LKJTv6
        subject_person_id: p_u9RtCfw8ECtD1jhMsF6wk6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三省
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U23WEGFimeCZ5keUbM6YyU
          claim_id: c_XjakbSHXVYhK7oY6LKJTv6
          source_id: s_9tVeWMS5ajxWVmyGAjKzRy
          stance: supports
          locator: CBDB:219539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219539）
          source: &a1
            id: s_9tVeWMS5ajxWVmyGAjKzRy
            source_type: api_record
            title: 中国历代人物传记资料库：王三省（CBDB 219539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219539&o=json
            external_identifier: CBDB:219539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xgp4gSaDvM7Ef5ZrJc3u9J
        subject_person_id: p_u9RtCfw8ECtD1jhMsF6wk6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三省，明人物。萬曆八年進士，曾任知府。（中国历代人物传记资料库 CBDB 219539）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JbjlOAkXhaAEKAlnmeBjOZ
          claim_id: c_Xgp4gSaDvM7Ef5ZrJc3u9J
          source_id: s_9tVeWMS5ajxWVmyGAjKzRy
          stance: supports
          locator: CBDB:219539
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
        id: c_O1dAhl7ixSr-1vXJiBibVk
        subject_person_id: p_u9RtCfw8ECtD1jhMsF6wk6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tEHS6YSuyxSKL9JTr26FoR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XsI5jivkbi6b4vYs5AaSEM
          claim_id: c_O1dAhl7ixSr-1vXJiBibVk
          source_id: s_9tVeWMS5ajxWVmyGAjKzRy
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tEHS6YSuyxSKL9JTr26FoR
        status: active
        display_name: 王嗣美
        merged_into_person_id: null
  other: []
---

# 王三省

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三省 | accepted |
| bio.summary | 王三省，明人物。萬曆八年進士，曾任知府。（中国历代人物传记资料库 CBDB 219539） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tEHS6YSuyxSKL9JTr26FoR | 王嗣美 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三省（CBDB 219539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219539&o=json)
