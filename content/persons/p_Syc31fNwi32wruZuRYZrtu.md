---
schema: wang-person/v1
id: p_Syc31fNwi32wruZuRYZrtu
status: active
merged_into: null
display_name: 王子言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_84JQpPuaiMw7ieiXkZJGCp
        subject_person_id: p_Syc31fNwi32wruZuRYZrtu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GPebcxxAr7ijcP92SxHW33
          claim_id: c_84JQpPuaiMw7ieiXkZJGCp
          source_id: s_4jTj5CQzBNbmZNKW3GN9ho
          stance: supports
          locator: CBDB:201131
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201131）
          source: &a1
            id: s_4jTj5CQzBNbmZNKW3GN9ho
            source_type: api_record
            title: 中国历代人物传记资料库：王子言（CBDB 201131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201131&o=json
            external_identifier: CBDB:201131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ud4KX8NLvpXu7uX1JaAfay
        subject_person_id: p_Syc31fNwi32wruZuRYZrtu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1460年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n7Bo43uQTN2W4559F8Ujgu
          claim_id: c_ud4KX8NLvpXu7uX1JaAfay
          source_id: s_4jTj5CQzBNbmZNKW3GN9ho
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GeLkd2U3MaxSjYJcDGxZrH
        subject_person_id: p_Syc31fNwi32wruZuRYZrtu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子言（生于1460年），明人物。明清進士進士，籍贯淳安，入仕進士，曾任員外郎。（中国历代人物传记资料库 CBDB 201131）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-i94W9KYxTLqVj_bQNfQmW
          claim_id: c_GeLkd2U3MaxSjYJcDGxZrH
          source_id: s_4jTj5CQzBNbmZNKW3GN9ho
          stance: supports
          locator: CBDB:201131
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
  ancestors:
    - claim:
        id: c_BQ50qucmYQSGgyNZxUZnl7
        subject_person_id: p_aAxnpkCu394RKmhcdBzMvL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Syc31fNwi32wruZuRYZrtu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QonVztNn3WUDxFGy_um5ro
          claim_id: c_BQ50qucmYQSGgyNZxUZnl7
          source_id: s_iUy6A5khPP9v4spaijJUD3
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第七十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iUy6A5khPP9v4spaijJUD3
            source_type: api_record
            title: 中国历代人物传记资料库：王本宗（CBDB 267617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267617&o=json
            external_identifier: CBDB:267617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aAxnpkCu394RKmhcdBzMvL
        status: active
        display_name: 王本宗
        merged_into_person_id: null
    - claim:
        id: c_pJzLHSGe20cN8UOno5zh-p
        subject_person_id: p_B4er96qGp4uN4mnMQC97RG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Syc31fNwi32wruZuRYZrtu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_trnleh9rCGUGTPwH8Obdfn
          claim_id: c_pJzLHSGe20cN8UOno5zh-p
          source_id: s_ZJr2B182obDDpCUkuEPhP7
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第七十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZJr2B182obDDpCUkuEPhP7
            source_type: api_record
            title: 中国历代人物传记资料库：王志善（CBDB 267618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267618&o=json
            external_identifier: CBDB:267618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B4er96qGp4uN4mnMQC97RG
        status: active
        display_name: 王志善
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王子言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子言 | accepted |
| birth.date | 1460年 | accepted |
| bio.summary | 王子言（生于1460年），明人物。明清進士進士，籍贯淳安，入仕進士，曾任員外郎。（中国历代人物传记资料库 CBDB 201131） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_aAxnpkCu394RKmhcdBzMvL | 王本宗 | accepted |
| ancestors | p_B4er96qGp4uN4mnMQC97RG | 王志善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本宗（CBDB 267617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267617&o=json)
- [中国历代人物传记资料库：王志善（CBDB 267618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267618&o=json)
- [中国历代人物传记资料库：王子言（CBDB 201131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201131&o=json)
