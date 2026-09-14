---
schema: wang-person/v1
id: p_7zf2a5oNnyToY3oe656HBD
status: active
merged_into: null
display_name: 王強學
cbdb_id: 33394
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dcf1fZpVRqtDKb5jQCSgqq
        subject_person_id: p_7zf2a5oNnyToY3oe656HBD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王強學，元人物。籍贯崑山州，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 33394）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gU18YV0dxYQyVy3D3nUVH1
          claim_id: c_dcf1fZpVRqtDKb5jQCSgqq
          source_id: s_em2cHTEwikGFFBoGMXNQxa
          stance: supports
          locator: CBDB:33394
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_em2cHTEwikGFFBoGMXNQxa
            source_type: api_record
            title: 中国历代人物传记资料库：王強學（CBDB 33394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33394&o=json
            external_identifier: CBDB:33394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uFqS9GSNvcPVBiCik9uFxT
        subject_person_id: p_7zf2a5oNnyToY3oe656HBD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王強學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_G3NBwqJbm1kss1H7wSgyZC
          claim_id: c_uFqS9GSNvcPVBiCik9uFxT
          source_id: s_em2cHTEwikGFFBoGMXNQxa
          stance: supports
          locator: CBDB:33394
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 元
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_chr_PGESXd5qZJSFRD87rg
        subject_person_id: p_PvTkvufzM52QMToQSVL7Mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7zf2a5oNnyToY3oe656HBD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wsMMFVrmKVCXNl4yngs8wE
          claim_id: c_chr_PGESXd5qZJSFRD87rg
          source_id: s_joHJVydspdfDh2_BdktLRC
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22117）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_joHJVydspdfDh2_BdktLRC
            source_type: api_record
            title: 中国历代人物传记资料库：王強學（CBDB 33394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33394&o=json
            external_identifier: CBDB:33394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PvTkvufzM52QMToQSVL7Mg
        status: active
        display_name: 王圭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王強學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王強學，元人物。籍贯崑山州，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 33394） | accepted |
| name.primary | 王強學 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PvTkvufzM52QMToQSVL7Mg | 王圭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王強學（CBDB 33394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33394&o=json)
