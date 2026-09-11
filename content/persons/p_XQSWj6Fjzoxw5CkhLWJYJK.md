---
schema: wang-person/v1
id: p_XQSWj6Fjzoxw5CkhLWJYJK
status: active
merged_into: null
display_name: 王頂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CMaGuzq2rKC3qJKSuDuweQ
        subject_person_id: p_XQSWj6Fjzoxw5CkhLWJYJK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EuNxwXC5kSP8NTwdCzxus3
          claim_id: c_CMaGuzq2rKC3qJKSuDuweQ
          source_id: s_wU8GvPA4Px2HixFLEvJ11H
          stance: supports
          locator: CBDB:227707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227707）
          source: &a1
            id: s_wU8GvPA4Px2HixFLEvJ11H
            source_type: api_record
            title: 中国历代人物传记资料库：王頂（CBDB 227707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227707&o=json
            external_identifier: CBDB:227707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_foS53vLQt87Es2DE8S3Csn
        subject_person_id: p_XQSWj6Fjzoxw5CkhLWJYJK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頂，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 227707）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qpBAOSKXx8YNbVf4DNQSam
          claim_id: c_foS53vLQt87Es2DE8S3Csn
          source_id: s_wU8GvPA4Px2HixFLEvJ11H
          stance: supports
          locator: CBDB:227707
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
        id: c_uSDxDkIi1B4rwS_AEuLjRC
        subject_person_id: p_XQSWj6Fjzoxw5CkhLWJYJK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K1A_2_g4Wv3dM7wO5H5Vfc
          claim_id: c_uSDxDkIi1B4rwS_AEuLjRC
          source_id: s_wU8GvPA4Px2HixFLEvJ11H
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UehS2yfTZaFGBh7uxhHFCE
        status: active
        display_name: 王之翰
        merged_into_person_id: null
  other: []
---

# 王頂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頂 | accepted |
| bio.summary | 王頂，明人物。萬曆丙戌科進士進士。（中国历代人物传记资料库 CBDB 227707） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_UehS2yfTZaFGBh7uxhHFCE | 王之翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王頂（CBDB 227707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227707&o=json)
