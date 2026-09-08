---
schema: wang-person/v1
id: p_YeDuBRffhPgU4my3fpH9gW
status: active
merged_into: null
display_name: 王鼎
cbdb_id: 1895
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Upvp53SYh93bf6j7WaGo3x
        subject_person_id: p_YeDuBRffhPgU4my3fpH9gW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王鼎，宋人物。CBDB 记录其籍贯记录为館陶，入仕记录为科舉: 進士(籠統)，曾任都轉運使、發運副使。中国历代人物传记资料库（CBDB）以人物编号 1895 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MCFx2Gou8KgaWSW9u1VSoV
          claim_id: c_Upvp53SYh93bf6j7WaGo3x
          source_id: s_p82hdqZkuwzq67cgQv63Hp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_p82hdqZkuwzq67cgQv63Hp
            source_type: api_record
            title: 维基数据：王鼎（Q45359716）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359716
            external_identifier: Q45359716
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
        - id: cs_tJuqCHfjS7f0ZT-3dJyHQq
          claim_id: c_Upvp53SYh93bf6j7WaGo3x
          source_id: s_LB8ZC5zd2MZDgXXTbj5yiz
          stance: supports
          locator: CBDB:1895
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LB8ZC5zd2MZDgXXTbj5yiz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鼎（1895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1895&o=json
            external_identifier: CBDB:1895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:58.005Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_efnmsG3ejF79FPYH7NjSQF
        subject_person_id: p_YeDuBRffhPgU4my3fpH9gW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fb36yS44P6bXwMknB7Fpxc
          claim_id: c_efnmsG3ejF79FPYH7NjSQF
          source_id: s_p82hdqZkuwzq67cgQv63Hp
          stance: supports
          locator: Q45359716
          quotation: null
          interpretation_note: null
          source:
            id: s_p82hdqZkuwzq67cgQv63Hp
            source_type: api_record
            title: 维基数据：王鼎（Q45359716）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359716
            external_identifier: Q45359716
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
        - id: cs_zGpiQ6Q184RnpL2fLvGovX
          claim_id: c_efnmsG3ejF79FPYH7NjSQF
          source_id: s_LB8ZC5zd2MZDgXXTbj5yiz
          stance: supports
          locator: Q45359716
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wvFtCJJ8huULQrpvYYP675
        subject_person_id: p_YrA9NHKrJ9RAt9EUXTAeHn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_YeDuBRffhPgU4my3fpH9gW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F5P8uAacptsAgKLqhfXXS7
          claim_id: c_wvFtCJJ8huULQrpvYYP675
          source_id: s_p82hdqZkuwzq67cgQv63Hp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_p82hdqZkuwzq67cgQv63Hp
            source_type: api_record
            title: 维基数据：王鼎（Q45359716）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359716
            external_identifier: Q45359716
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
        - id: cs_vqRKEpLjoRthsPtnYwqp9C
          claim_id: c_wvFtCJJ8huULQrpvYYP675
          source_id: s_XwhJZ2cwgSt1iStmBXrUJg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XwhJZ2cwgSt1iStmBXrUJg
            source_type: api_record
            title: 维基数据：王沿（Q10415436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415436
            external_identifier: Q10415436
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:48.321Z
            metadata_json: null
        - id: cs_z4PgsMiyPewtnyunRc4tZH
          claim_id: c_wvFtCJJ8huULQrpvYYP675
          source_id: s_K8RFUFWNNRBbugHS4bJxi3
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_K8RFUFWNNRBbugHS4bJxi3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沿（1922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1922&o=json
            external_identifier: CBDB:1922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:30.288Z
            metadata_json: null
      object_person:
        id: p_YrA9NHKrJ9RAt9EUXTAeHn
        status: active
        display_name: 王沿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鼎，宋人物。CBDB 记录其籍贯记录为館陶，入仕记录为科舉: 進士(籠統)，曾任都轉運使、發運副使。中国历代人物传记资料库（CBDB）以人物编号 1895 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王鼎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YrA9NHKrJ9RAt9EUXTAeHn | 王沿 | accepted |

## 外部来源

- [维基数据：王鼎（Q45359716）](https://www.wikidata.org/wiki/Q45359716)
- [维基数据：王沿（Q10415436）](https://www.wikidata.org/wiki/Q10415436)
- [CBDB 中国历代人物传记资料库：王鼎（1895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1895&o=json)
- [CBDB 中国历代人物传记资料库：王沿（1922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1922&o=json)
