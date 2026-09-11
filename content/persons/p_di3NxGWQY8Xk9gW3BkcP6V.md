---
schema: wang-person/v1
id: p_di3NxGWQY8Xk9gW3BkcP6V
status: active
merged_into: null
display_name: 王廷俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CgNMjTpJPPFrcYUAbR15ae
        subject_person_id: p_di3NxGWQY8Xk9gW3BkcP6V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X7vY7VAETHozH4L4SaoN9X
          claim_id: c_CgNMjTpJPPFrcYUAbR15ae
          source_id: s_XhZogvSgwx6MkQDzYNKTLU
          stance: supports
          locator: CBDB:233449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233449）
          source: &a1
            id: s_XhZogvSgwx6MkQDzYNKTLU
            source_type: api_record
            title: 中国历代人物传记资料库：王廷俊（CBDB 233449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233449&o=json
            external_identifier: CBDB:233449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.718Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WH98Q67CskUkcQsBkQ12C6
        subject_person_id: p_di3NxGWQY8Xk9gW3BkcP6V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷俊，明人物。籍贯海鹽，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 233449）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dzxuZwAfJ5iES7vDlzLahd
          claim_id: c_WH98Q67CskUkcQsBkQ12C6
          source_id: s_XhZogvSgwx6MkQDzYNKTLU
          stance: supports
          locator: CBDB:233449
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zzWSuVXk8i6AgfG77jNziG
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_di3NxGWQY8Xk9gW3BkcP6V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DeMhSVbaJx4UJ5IZvnpYfx
          claim_id: c_zzWSuVXk8i6AgfG77jNziG
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hQ4MNw8gYqbwTtzMu8ZNXd
            source_type: api_record
            title: 中国历代人物传记资料库：王家相（CBDB 207666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json
            external_identifier: CBDB:207666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cpGBEq63QojtvoRHpvNFEb
        status: active
        display_name: 王家相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷俊 | accepted |
| bio.summary | 王廷俊，明人物。籍贯海鹽，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 233449） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cpGBEq63QojtvoRHpvNFEb | 王家相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家相（CBDB 207666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json)
- [中国历代人物传记资料库：王廷俊（CBDB 233449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233449&o=json)
