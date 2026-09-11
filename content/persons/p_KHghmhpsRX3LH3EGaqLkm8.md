---
schema: wang-person/v1
id: p_KHghmhpsRX3LH3EGaqLkm8
status: active
merged_into: null
display_name: 王金映
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iXFX2e6U2vWQJwQ59dyM1B
        subject_person_id: p_KHghmhpsRX3LH3EGaqLkm8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金映
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HrNDm9dAbLe3bnDTBa5sNc
          claim_id: c_iXFX2e6U2vWQJwQ59dyM1B
          source_id: s_XMPyjuKjiDX3AwTU1C7eFk
          stance: supports
          locator: CBDB:343709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343709）
          source: &a1
            id: s_XMPyjuKjiDX3AwTU1C7eFk
            source_type: api_record
            title: 中国历代人物传记资料库：王金映（CBDB 343709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343709&o=json
            external_identifier: CBDB:343709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e16tjEqjXgBGebvbuRMHwq
        subject_person_id: p_KHghmhpsRX3LH3EGaqLkm8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金映，清人物。明清進士進士，籍贯長沙，入仕進士。（中国历代人物传记资料库 CBDB 343709）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_apnRxgxepJInsWwjtLy02d
          claim_id: c_e16tjEqjXgBGebvbuRMHwq
          source_id: s_XMPyjuKjiDX3AwTU1C7eFk
          stance: supports
          locator: CBDB:343709
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
  descendants: []
  other: []
---

# 王金映

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金映 | accepted |
| bio.summary | 王金映，清人物。明清進士進士，籍贯長沙，入仕進士。（中国历代人物传记资料库 CBDB 343709） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金映（CBDB 343709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343709&o=json)
