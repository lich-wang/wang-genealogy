---
schema: wang-person/v1
id: p_bbnd1A9EEgUe5YEkwF6xeq
status: active
merged_into: null
display_name: 王益柔
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nVJaGpPoBRJdAHDNzLxujF
        subject_person_id: p_bbnd1A9EEgUe5YEkwF6xeq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益柔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NPCGYx9T3LAAHjhLKT9Qzf
          claim_id: c_nVJaGpPoBRJdAHDNzLxujF
          source_id: s_vK1KqigKApyJ9XPgUKaMQG
          stance: supports
          locator: CBDB:1828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1828）
          source: &a1
            id: s_vK1KqigKApyJ9XPgUKaMQG
            source_type: api_record
            title: 中国历代人物传记资料库：王益柔（CBDB 1828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1828&o=json
            external_identifier: CBDB:1828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.307Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Tr41sMbn6A2QbotcqtGZLP
        subject_person_id: p_bbnd1A9EEgUe5YEkwF6xeq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1015年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WT8g4Uu5zPSgSeuU3E8kYK
          claim_id: c_Tr41sMbn6A2QbotcqtGZLP
          source_id: s_vK1KqigKApyJ9XPgUKaMQG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8kKLQkDFjgcEjXVCcYtH4t
        subject_person_id: p_bbnd1A9EEgUe5YEkwF6xeq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1086年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eTSUK9zmjv12xCKU87LjcP
          claim_id: c_8kKLQkDFjgcEjXVCcYtH4t
          source_id: s_vK1KqigKApyJ9XPgUKaMQG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nG5xqFLiG2SW37FchyLUJw
        subject_person_id: p_bbnd1A9EEgUe5YEkwF6xeq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益柔（1015年—1086年），宋人物。籍贯洛陽，身份为好學，入仕恩蔭、蔭補，曾任三館、太中大夫、贊善大夫。（中国历代人物传记资料库 CBDB 1828）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d202lMpyFhQPRxs6B3svkn
          claim_id: c_nG5xqFLiG2SW37FchyLUJw
          source_id: s_vK1KqigKApyJ9XPgUKaMQG
          stance: supports
          locator: CBDB:1828
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0B-fFjiei4ANsSRZx6_ADy
        subject_person_id: p_kx3JCi5hvZyKiyizeGH3KR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bbnd1A9EEgUe5YEkwF6xeq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DfUmjxcAMoR5pRr9LZwxb6
          claim_id: c_0B-fFjiei4ANsSRZx6_ADy
          source_id: s_AWFgGe72lkIVskVcdB5v8u
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1877）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_AWFgGe72lkIVskVcdB5v8u
            source_type: api_record
            title: 中国历代人物传记资料库：王益柔（CBDB 1828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1828&o=json
            external_identifier: CBDB:1828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kx3JCi5hvZyKiyizeGH3KR
        status: active
        display_name: 王曙
        merged_into_person_id: null
    - claim:
        id: c_CawV1TA82vI-KjBIppiX12
        subject_person_id: p_8anQvNHWgZmjr7kH33WSDn
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_bbnd1A9EEgUe5YEkwF6xeq
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LDCXUvYyeNrl1CNRSCvnr_
          claim_id: c_CawV1TA82vI-KjBIppiX12
          source_id: s_AWFgGe72lkIVskVcdB5v8u
          stance: supports
          locator: CBDB 亲属：母（KinPerson 577084）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_AWFgGe72lkIVskVcdB5v8u
            source_type: api_record
            title: 中国历代人物传记资料库：王益柔（CBDB 1828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1828&o=json
            external_identifier: CBDB:1828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8anQvNHWgZmjr7kH33WSDn
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KfCJr3OAK-Za8MPa8ZCwaQ
        subject_person_id: p_8yGvQV64DEaN7zXdMCaL2M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bbnd1A9EEgUe5YEkwF6xeq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRmhUjdSKwPXks7K0UDs4a
          claim_id: c_KfCJr3OAK-Za8MPa8ZCwaQ
          source_id: s_AWFgGe72lkIVskVcdB5v8u
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 22054 王益恭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AWFgGe72lkIVskVcdB5v8u
            source_type: api_record
            title: 中国历代人物传记资料库：王益柔（CBDB 1828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1828&o=json
            external_identifier: CBDB:1828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8yGvQV64DEaN7zXdMCaL2M
        status: active
        display_name: 王益恭
        merged_into_person_id: null
---

# 王益柔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益柔 | accepted |
| birth.date | 1015年 | accepted |
| death.date | 1086年 | accepted |
| bio.summary | 王益柔（1015年—1086年），宋人物。籍贯洛陽，身份为好學，入仕恩蔭、蔭補，曾任三館、太中大夫、贊善大夫。（中国历代人物传记资料库 CBDB 1828） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kx3JCi5hvZyKiyizeGH3KR | 王曙 | accepted |
| parents | p_8anQvNHWgZmjr7kH33WSDn | 劉氏 | accepted |
| other | p_8yGvQV64DEaN7zXdMCaL2M | 王益恭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王益柔（CBDB 1828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1828&o=json)
