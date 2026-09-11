---
schema: wang-person/v1
id: p_PvJSWUenksG3qVpCHLqjhz
status: active
merged_into: null
display_name: 王麒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YUvJcK3Yfr6xbJVV2mNJAV
        subject_person_id: p_PvJSWUenksG3qVpCHLqjhz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DJfKPz6Z6HHutq5pwt5XzZ
          claim_id: c_YUvJcK3Yfr6xbJVV2mNJAV
          source_id: s_CFqzRdAVnzQdro1Fy17ytM
          stance: supports
          locator: CBDB:697816
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697816）
          source: &a1
            id: s_CFqzRdAVnzQdro1Fy17ytM
            source_type: api_record
            title: 中国历代人物传记资料库：王麒（CBDB 697816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697816&o=json
            external_identifier: CBDB:697816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mNKWzBhfB3pkFoJ4jnSjD5
        subject_person_id: p_PvJSWUenksG3qVpCHLqjhz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麒，明人物。籍贯曹州，身份为博學之人、詩人，入仕薦舉 (保任,保舉)，曾任掌國子監祭酒事、按察使司僉事。（中国历代人物传记资料库 CBDB 697816）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z7XhkvU_zq1ScUr44mMFu1
          claim_id: c_mNKWzBhfB3pkFoJ4jnSjD5
          source_id: s_CFqzRdAVnzQdro1Fy17ytM
          stance: supports
          locator: CBDB:697816
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
        id: c_ONC0RY3bZ04fwN2J9uq2DS
        subject_person_id: p_PvJSWUenksG3qVpCHLqjhz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jzBh6L6KhRH4LcPSXE67mz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xY8GxTZvRTegDwoycvycdk
          claim_id: c_ONC0RY3bZ04fwN2J9uq2DS
          source_id: s_imQ7JRrSsxwenYX754GD3c
          stance: supports
          locator: 新修菏澤縣志，lgid=725093：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_imQ7JRrSsxwenYX754GD3c
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 243628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243628&o=json
            external_identifier: CBDB:243628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jzBh6L6KhRH4LcPSXE67mz
        status: active
        display_name: 王蘭
        merged_into_person_id: null
  other: []
---

# 王麒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麒 | accepted |
| bio.summary | 王麒，明人物。籍贯曹州，身份为博學之人、詩人，入仕薦舉 (保任,保舉)，曾任掌國子監祭酒事、按察使司僉事。（中国历代人物传记资料库 CBDB 697816） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_jzBh6L6KhRH4LcPSXE67mz | 王蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘭（CBDB 243628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243628&o=json)
- [中国历代人物传记资料库：王麒（CBDB 697816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697816&o=json)
