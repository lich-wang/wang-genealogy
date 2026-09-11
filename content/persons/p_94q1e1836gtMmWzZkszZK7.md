---
schema: wang-person/v1
id: p_94q1e1836gtMmWzZkszZK7
status: active
merged_into: null
display_name: 王益
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XLff7ffMzZKdntHWk1KLaR
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_znuC9mm5QEceoVHE9178w9
          claim_id: c_XLff7ffMzZKdntHWk1KLaR
          source_id: s_KzVUwTYqbZ1sLD6i43Wwnw
          stance: supports
          locator: CBDB:7082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7082）
          source: &a1
            id: s_KzVUwTYqbZ1sLD6i43Wwnw
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 7082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json
            external_identifier: CBDB:7082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.470Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_R1keHywZ8bP1dD6rAwjvww
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 993年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_71H3Xk55Mq62LdEnAmT45M
          claim_id: c_R1keHywZ8bP1dD6rAwjvww
          source_id: s_KzVUwTYqbZ1sLD6i43Wwnw
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
        id: c_YnWwLpCjetZDUHpM1g38FT
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1038年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_76H8QjDJDfZZ2w7vykimvP
          claim_id: c_YnWwLpCjetZDUHpM1g38FT
          source_id: s_KzVUwTYqbZ1sLD6i43Wwnw
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
        id: c_9ecbHyeNBcFLzFRCZWi1cp
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益（993年—1038年），宋人物。籍贯臨川，入仕進士，曾任殿中省丞、國公、殿中省尚衣奉御。（中国历代人物传记资料库 CBDB 7082）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MJvUgh-8ECxZq8j-c-CCt0
          claim_id: c_9ecbHyeNBcFLzFRCZWi1cp
          source_id: s_KzVUwTYqbZ1sLD6i43Wwnw
          stance: supports
          locator: CBDB:7082
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mKWE8KtcDGfNAzeHDRl8h4
        subject_person_id: p_ayDBbENQJQKZToA3G7hGQm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_94q1e1836gtMmWzZkszZK7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L6otbDiIqh_NaP0vkGck4E
          claim_id: c_mKWE8KtcDGfNAzeHDRl8h4
          source_id: s_9pBeLoowJaNiChuJLaFPPm
          stance: supports
          locator: 宋人傳記資料索引(電子版)，812;815：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9pBeLoowJaNiChuJLaFPPm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：謝氏（5305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5305&o=json
            external_identifier: CBDB:5305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:15.877Z
            metadata_json: null
      object_person:
        id: p_ayDBbENQJQKZToA3G7hGQm
        status: active
        display_name: 谢氏
        merged_into_person_id: null
  children:
    - claim:
        id: c_ImricfX8NpNl1DdTGiJC8c
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fuv1kE3UCBeTFNiA6c9Tuw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OUxeQR_ajp52O9h1KeKEpC
          claim_id: c_ImricfX8NpNl1DdTGiJC8c
          source_id: s_Gh6euCr2RKfuAXB8kPrVBR
          stance: supports
          locator: 宋人傳記資料索引(電子版)，812：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Gh6euCr2RKfuAXB8kPrVBR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库
            creator: null
            publisher: null
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu
            external_identifier: CBDB:1762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: null
            metadata_json: null
      object_person:
        id: p_fuv1kE3UCBeTFNiA6c9Tuw
        status: active
        display_name: 王安石
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_oiPYkRmfeGcbZSwZLL6Zvd
        subject_person_id: p_U5JQDU5J5YYRKaCvpa53pZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_94q1e1836gtMmWzZkszZK7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J8HBk65tcAv5g-Nbh7lonN
          claim_id: c_oiPYkRmfeGcbZSwZLL6Zvd
          source_id: s_r1DEUtGRws9a3wk7bfrEBS
          stance: supports
          locator: 宋人傳記資料索引(電子版)，812;813：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r1DEUtGRws9a3wk7bfrEBS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王明（18552）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18552&o=json
            external_identifier: CBDB:18552
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:04.915Z
            metadata_json: null
      object_person:
        id: p_U5JQDU5J5YYRKaCvpa53pZ
        status: active
        display_name: 王明
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_-J-0PaMO713l_odSJkEPXC
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AaCnfGLcMfDBMy6fa5pHnh
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h_behJo89XcILgzfOfWk6z
          claim_id: c_-J-0PaMO713l_odSJkEPXC
          source_id: s_p5DWQW4daMavXjhMed5BAm
          stance: supports
          locator: CBDB 双向互证（高祖;四世祖 王益 ⇄ 玄孫;四世孫 王琮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_p5DWQW4daMavXjhMed5BAm
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 18556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18556&o=json
            external_identifier: CBDB:18556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.709Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AaCnfGLcMfDBMy6fa5pHnh
        status: active
        display_name: 王琮
        merged_into_person_id: null
    - claim:
        id: c_B9Pgk-WCyOYBWtb9SyM4J9
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_etCiHPpx7ir9nAd1MN6VyR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cKxVTO3brev9VBfe4tBa7r
          claim_id: c_B9Pgk-WCyOYBWtb9SyM4J9
          source_id: s_bwP62UZcbCRQMBdSYEbhST
          stance: supports
          locator: CBDB 双向互证（祖父 王益 ⇄ 孫 王旉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_bwP62UZcbCRQMBdSYEbhST
            source_type: api_record
            title: 中国历代人物传记资料库：王旉（CBDB 1805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1805&o=json
            external_identifier: CBDB:1805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_etCiHPpx7ir9nAd1MN6VyR
        status: active
        display_name: 王旉
        merged_into_person_id: null
    - claim:
        id: c_3nZvh_jBrJ3CSL3x9pNhZm
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZCFBggnkNHAtiFjGNwBVSK
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XsyliLph6UJuiohapH5ZgJ
          claim_id: c_3nZvh_jBrJ3CSL3x9pNhZm
          source_id: s_DBFxKnaMSNtcFThC9xvRDa
          stance: supports
          locator: CBDB 双向互证（高祖;四世祖 王益 ⇄ 玄孫;四世孫 王珪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_DBFxKnaMSNtcFThC9xvRDa
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 1846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1846&o=json
            external_identifier: CBDB:1846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZCFBggnkNHAtiFjGNwBVSK
        status: active
        display_name: 王珪
        merged_into_person_id: null
  other: []
---

# 王益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益 | accepted |
| birth.date | 993年 | accepted |
| death.date | 1038年 | accepted |
| bio.summary | 王益（993年—1038年），宋人物。籍贯臨川，入仕進士，曾任殿中省丞、國公、殿中省尚衣奉御。（中国历代人物传记资料库 CBDB 7082） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ayDBbENQJQKZToA3G7hGQm | 谢氏 | accepted |
| children | p_fuv1kE3UCBeTFNiA6c9Tuw | 王安石 | accepted |
| ancestors | p_U5JQDU5J5YYRKaCvpa53pZ | 王明 | accepted |
| descendants | p_AaCnfGLcMfDBMy6fa5pHnh | 王琮 | accepted |
| descendants | p_etCiHPpx7ir9nAd1MN6VyR | 王旉 | accepted |
| descendants | p_ZCFBggnkNHAtiFjGNwBVSK | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 18556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18556&o=json)
- [中国历代人物传记资料库：王旉（CBDB 1805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1805&o=json)
- [中国历代人物传记资料库：王珪（CBDB 1846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1846&o=json)
- [中国历代人物传记资料库：王益（CBDB 7082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7082&o=json)
- [CBDB 中国历代人物传记资料库](https://cbdb.fas.harvard.edu)
- [CBDB 中国历代人物传记资料库：王明（18552）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18552&o=json)
- [CBDB 中国历代人物传记资料库：謝氏（5305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5305&o=json)
