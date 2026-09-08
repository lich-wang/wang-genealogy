---
schema: wang-person/v1
id: p_KHASkzeAzAbrH4KC5REzz6
status: active
merged_into: null
display_name: 王爵
cbdb_id: 288334
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MQbF9APK8TMhNcmDQE75MB
        subject_person_id: p_KHASkzeAzAbrH4KC5REzz6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爵，明人物。CBDB 记录其籍贯记录为鄉寧，曾任知州。中国历代人物传记资料库（CBDB）以人物编号 288334 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_51pCqfeLsyAfn48z1CAvLa
          claim_id: c_MQbF9APK8TMhNcmDQE75MB
          source_id: s_7uDJHF5B7XAk94UpqzckJt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_7uDJHF5B7XAk94UpqzckJt
            source_type: api_record
            title: 维基数据：王爵（Q45449767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449767
            external_identifier: Q45449767
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:49.962Z
            metadata_json: null
        - id: cs_KYZ3LOEm6ZQiCuAItKrENP
          claim_id: c_MQbF9APK8TMhNcmDQE75MB
          source_id: s_3U5kP6NchRmUxN1ysZp8Jt
          stance: supports
          locator: CBDB:288334
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3U5kP6NchRmUxN1ysZp8Jt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王爵（288334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288334&o=json
            external_identifier: CBDB:288334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:50.101Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_P7ehx3B6zppRvsFbaVzN1z
        subject_person_id: p_KHASkzeAzAbrH4KC5REzz6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爵
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3dybmgJ9J1s5x2V3uaBNPr
          claim_id: c_P7ehx3B6zppRvsFbaVzN1z
          source_id: s_7uDJHF5B7XAk94UpqzckJt
          stance: supports
          locator: Q45449767
          quotation: null
          interpretation_note: null
          source:
            id: s_7uDJHF5B7XAk94UpqzckJt
            source_type: api_record
            title: 维基数据：王爵（Q45449767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449767
            external_identifier: Q45449767
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:49.962Z
            metadata_json: null
        - id: cs_Tjqwjhsh9BJch78VBjHk8E
          claim_id: c_P7ehx3B6zppRvsFbaVzN1z
          source_id: s_3U5kP6NchRmUxN1ysZp8Jt
          stance: supports
          locator: Q45449767
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K9JP1NGDmdRYw9J1Asw8rR
        subject_person_id: p_qa4sYo9q4waHmECZyCZ8M3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KHASkzeAzAbrH4KC5REzz6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_inFRDJztiqDC3x1akt6FV7
          claim_id: c_K9JP1NGDmdRYw9J1Asw8rR
          source_id: s_7uDJHF5B7XAk94UpqzckJt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_5kzKQ5ENPMb7PiuBsMWdTt
          claim_id: c_K9JP1NGDmdRYw9J1Asw8rR
          source_id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
            source_type: api_record
            title: 维基数据：王文（Q45449706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449706
            external_identifier: Q45449706
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
      object_person:
        id: p_qa4sYo9q4waHmECZyCZ8M3
        status: active
        display_name: 王文
        merged_into_person_id: null
  children:
    - claim:
        id: c_KtDUG74Ni1BG7aAhKMc7Po
        subject_person_id: p_KHASkzeAzAbrH4KC5REzz6
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_LYKX47nJ8c49oqYNGB3kRd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_77sXx4gcU1nxTQreCiwvzb
          claim_id: c_KtDUG74Ni1BG7aAhKMc7Po
          source_id: s_7uDJHF5B7XAk94UpqzckJt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7uDJHF5B7XAk94UpqzckJt
            source_type: api_record
            title: 维基数据：王爵（Q45449767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449767
            external_identifier: Q45449767
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:49.962Z
            metadata_json: null
        - id: cs_YaUBQMXyun7LFSGnW9wqCu
          claim_id: c_KtDUG74Ni1BG7aAhKMc7Po
          source_id: s_mSQjg4RmB78Azw6f47f7sr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mSQjg4RmB78Azw6f47f7sr
            source_type: api_record
            title: 维基数据：王与龄（Q15924928）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924928
            external_identifier: Q15924928
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:28.997Z
            metadata_json: null
      object_person:
        id: p_LYKX47nJ8c49oqYNGB3kRd
        status: active
        display_name: 王与龄
        merged_into_person_id: null
    - claim:
        id: c_JErb13NwKanyRCrk8HTQXg
        subject_person_id: p_KHASkzeAzAbrH4KC5REzz6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qzznHsDy1MaFH1YWPbYub4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2GhSyhg3hzUTNM1hHACgbs
          claim_id: c_JErb13NwKanyRCrk8HTQXg
          source_id: s_7uDJHF5B7XAk94UpqzckJt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_hGZ3Wk1bhvpLcaJGnMNJtj
          claim_id: c_JErb13NwKanyRCrk8HTQXg
          source_id: s_qTrXfDWBFpFpZgrDZ9JGLL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_qTrXfDWBFpFpZgrDZ9JGLL
            source_type: api_record
            title: 维基数据：王培龄（Q45690317）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45690317
            external_identifier: Q45690317
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:50.150Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9F%B9%E9%BD%A1
        - id: cs_GEYCCnYM5BifuLFxfS77vG
          claim_id: c_JErb13NwKanyRCrk8HTQXg
          source_id: s_3U5kP6NchRmUxN1ysZp8Jt
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖八年進士登科錄:一卷
          source: *a1
      object_person:
        id: p_qzznHsDy1MaFH1YWPbYub4
        status: active
        display_name: 王培龄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王爵，明人物。CBDB 记录其籍贯记录为鄉寧，曾任知州。中国历代人物传记资料库（CBDB）以人物编号 288334 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王爵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qa4sYo9q4waHmECZyCZ8M3 | 王文 | accepted |
| children | p_LYKX47nJ8c49oqYNGB3kRd | 王与龄 | accepted |
| children | p_qzznHsDy1MaFH1YWPbYub4 | 王培龄 | accepted |

## 外部来源

- [维基数据：王爵（Q45449767）](https://www.wikidata.org/wiki/Q45449767)
- [维基数据：王培龄（Q45690317）](https://www.wikidata.org/wiki/Q45690317)
- [维基数据：王文（Q45449706）](https://www.wikidata.org/wiki/Q45449706)
- [维基数据：王与龄（Q15924928）](https://www.wikidata.org/wiki/Q15924928)
- [CBDB 中国历代人物传记资料库：王爵（288334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288334&o=json)
