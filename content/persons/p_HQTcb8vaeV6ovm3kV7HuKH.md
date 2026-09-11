---
schema: wang-person/v1
id: p_HQTcb8vaeV6ovm3kV7HuKH
status: active
merged_into: null
display_name: 向升
revision: 1
cbdb_id: 691859
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DxheVYvSSqPkn1fT7b3S4o
        subject_person_id: p_HQTcb8vaeV6ovm3kV7HuKH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 向升，明人物。籍贯海鹽。（中国历代人物传记资料库 CBDB 691859）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vNsBP3GVZpOS6p1N8Fw49b
          claim_id: c_DxheVYvSSqPkn1fT7b3S4o
          source_id: s_yrkzHiaO-IYQdzC7tKEysx
          stance: supports
          locator: CBDB:691859
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yrkzHiaO-IYQdzC7tKEysx
            source_type: api_record
            title: 中国历代人物传记资料库：向升（CBDB 691859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691859&o=json
            external_identifier: CBDB:691859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oyr5frvgmDwAoAeKIzbKtS
        subject_person_id: p_HQTcb8vaeV6ovm3kV7HuKH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 向升
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GPtySGYR7xTDFchB3cUB06
          claim_id: c_oyr5frvgmDwAoAeKIzbKtS
          source_id: s_yrkzHiaO-IYQdzC7tKEysx
          stance: supports
          locator: CBDB:691859
          quotation: null
          interpretation_note: CBDB 明确记录的王月妝配偶
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
        id: c_IGgk4j--bARR8ZP4nX01Wy
        subject_person_id: p_7voC11u2QCk37WAc7cqjK2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HQTcb8vaeV6ovm3kV7HuKH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KRP4y4m--nCWBnSRuuvqk9
          claim_id: c_IGgk4j--bARR8ZP4nX01Wy
          source_id: s_yrkzHiaO-IYQdzC7tKEysx
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294156：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7voC11u2QCk37WAc7cqjK2
        status: active
        display_name: 王月妝
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 向升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 向升，明人物。籍贯海鹽。（中国历代人物传记资料库 CBDB 691859） | accepted |
| name.primary | 向升 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7voC11u2QCk37WAc7cqjK2 | 王月妝 | accepted |

## 外部来源

- [中国历代人物传记资料库：向升（CBDB 691859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691859&o=json)
