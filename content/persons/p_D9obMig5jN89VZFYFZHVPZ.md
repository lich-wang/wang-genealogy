---
schema: wang-person/v1
id: p_D9obMig5jN89VZFYFZHVPZ
status: active
merged_into: null
display_name: 王竹素
cbdb_id: 121696
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qaV84tfPokPneke38N1QfU
        subject_person_id: p_D9obMig5jN89VZFYFZHVPZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王竹素，清人物。中国历代人物传记资料库（CBDB）以人物编号 121696 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_3YSLTgn8dXBfhebcpy5MSn
          claim_id: c_qaV84tfPokPneke38N1QfU
          source_id: s_qjWW7VcabjXRgd91G4XPAe
          stance: supports
          locator: CBDB:121696
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_qjWW7VcabjXRgd91G4XPAe
            source_type: api_record
            title: 中国历代人物传记资料库：王竹素（CBDB 121696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121696&o=json
            external_identifier: CBDB:121696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fdT4KjAAqR83dJKGsCR4EW
        subject_person_id: p_D9obMig5jN89VZFYFZHVPZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王竹素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HSDeT5GvVEn7A6NMy3CYUJ
          claim_id: c_fdT4KjAAqR83dJKGsCR4EW
          source_id: s_qjWW7VcabjXRgd91G4XPAe
          stance: supports
          locator: CBDB:121696
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_qjWW7VcabjXRgd91G4XPAe
            source_type: api_record
            title: 中国历代人物传记资料库：王竹素（CBDB 121696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121696&o=json
            external_identifier: CBDB:121696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_FtmkdeawBLR42wjx9L0N98
        subject_person_id: p_D9obMig5jN89VZFYFZHVPZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QiBgMHiKDR8RBFMAYZemjH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EtYU1sC_N7sO6MGSeRK20M
          claim_id: c_FtmkdeawBLR42wjx9L0N98
          source_id: s_R2Szc1ndwswW1ADrw-0Rg2
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4147, HuWenKai #232：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R2Szc1ndwswW1ADrw-0Rg2
            source_type: api_record
            title: 中国历代人物传记资料库：趙琳（CBDB 121700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121700&o=json
            external_identifier: CBDB:121700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QiBgMHiKDR8RBFMAYZemjH
        status: active
        display_name: 趙琳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王竹素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王竹素，清人物。中国历代人物传记资料库（CBDB）以人物编号 121696 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王竹素 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_QiBgMHiKDR8RBFMAYZemjH | 趙琳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王竹素（CBDB 121696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121696&o=json)
- [中国历代人物传记资料库：趙琳（CBDB 121700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121700&o=json)
