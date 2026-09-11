---
schema: wang-person/v1
id: p_KEoDBUQZkr54B6QhQtTe7V
status: active
merged_into: null
display_name: 王寬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SnFLYaYZG6kHAuEoTuUQKC
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7HiRGJGyeFBPF6mYhDBCMd
          claim_id: c_SnFLYaYZG6kHAuEoTuUQKC
          source_id: s_buh6GdarQeqSi4ruLF1vxG
          stance: supports
          locator: CBDB:327151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327151）
          source: &a1
            id: s_buh6GdarQeqSi4ruLF1vxG
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 327151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327151&o=json
            external_identifier: CBDB:327151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CY6vRGq6kPf58JeosUWYCc
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬，明人物。嘉靖四十一年進士，籍贯東陽，曾任教諭。（中国历代人物传记资料库 CBDB 327151）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JAJK5VWFkD5djZ_WgKYUAz
          claim_id: c_CY6vRGq6kPf58JeosUWYCc
          source_id: s_buh6GdarQeqSi4ruLF1vxG
          stance: supports
          locator: CBDB:327151
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wETXaKSC5Z0nxMP5SToY92
        subject_person_id: p_KEoDBUQZkr54B6QhQtTe7V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BxK799vwCxhyA6JGbqpHzN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mdco735JDEM6RGyx1FiU7O
          claim_id: c_wETXaKSC5Z0nxMP5SToY92
          source_id: s_n8fY6D3sur5MtKi8shwUp7
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n8fY6D3sur5MtKi8shwUp7
            source_type: api_record
            title: 中国历代人物传记资料库：王乾章（CBDB 126679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126679&o=json
            external_identifier: CBDB:126679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BxK799vwCxhyA6JGbqpHzN
        status: active
        display_name: 王乾章
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| bio.summary | 王寬，明人物。嘉靖四十一年進士，籍贯東陽，曾任教諭。（中国历代人物传记资料库 CBDB 327151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BxK799vwCxhyA6JGbqpHzN | 王乾章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 327151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327151&o=json)
- [中国历代人物传记资料库：王乾章（CBDB 126679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126679&o=json)
