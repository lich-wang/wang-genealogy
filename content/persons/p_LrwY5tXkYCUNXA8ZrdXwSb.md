---
schema: wang-person/v1
id: p_LrwY5tXkYCUNXA8ZrdXwSb
status: active
merged_into: null
display_name: 王維楨
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T6JD4ve6fGH8tDNU4AExx2
        subject_person_id: p_LrwY5tXkYCUNXA8ZrdXwSb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H1hCQkYQBwkn7Dsa5Cs6KC
          claim_id: c_T6JD4ve6fGH8tDNU4AExx2
          source_id: s_e4skhE2KQcP2WAfPeiC3w7
          stance: supports
          locator: CBDB:126791
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126791）
          source: &a1
            id: s_e4skhE2KQcP2WAfPeiC3w7
            source_type: api_record
            title: 中国历代人物传记资料库：王維楨（CBDB 126791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126791&o=json
            external_identifier: CBDB:126791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HBG521m8zEbd2CDDDGvoRB
        subject_person_id: p_LrwY5tXkYCUNXA8ZrdXwSb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1507年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2uEQrZ9Eg81L5APoTXtdeT
          claim_id: c_HBG521m8zEbd2CDDDGvoRB
          source_id: s_e4skhE2KQcP2WAfPeiC3w7
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
        id: c_YsxBH3n9FKKBEGgMbHu4Kr
        subject_person_id: p_LrwY5tXkYCUNXA8ZrdXwSb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1555年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VYBPyKcoLed29ecugZ4QDU
          claim_id: c_YsxBH3n9FKKBEGgMbHu4Kr
          source_id: s_e4skhE2KQcP2WAfPeiC3w7
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
        id: c_k7aT9pVcN1F6gymbTvL1me
        subject_person_id: p_LrwY5tXkYCUNXA8ZrdXwSb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維楨（1507年—1555年），明人物。籍贯華州，身份为經世學者，入仕進士，曾任副使、祭酒。（中国历代人物传记资料库 CBDB 126791）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5e40QNZdRii3BrNI7YjlZ4
          claim_id: c_k7aT9pVcN1F6gymbTvL1me
          source_id: s_e4skhE2KQcP2WAfPeiC3w7
          stance: supports
          locator: CBDB:126791
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JbmSoiG-dlmED4dat0U4J4
        subject_person_id: p_HxkU2fnETNPPrHRLTi3TtQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LrwY5tXkYCUNXA8ZrdXwSb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D55ZRia-hrrWq3ZxFZk3Lq
          claim_id: c_JbmSoiG-dlmED4dat0U4J4
          source_id: s_B9C1yXQ4hWLZGnjPi1s5ui
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B9C1yXQ4hWLZGnjPi1s5ui
            source_type: api_record
            title: 中国历代人物传记资料库：王載（CBDB 297163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297163&o=json
            external_identifier: CBDB:297163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HxkU2fnETNPPrHRLTi3TtQ
        status: active
        display_name: 王載
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ldW1NwY_3q4YpJDzUbcGgL
        subject_person_id: p_1ACKLnuM8rd7xX3FtfoL2G
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LrwY5tXkYCUNXA8ZrdXwSb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VDmbh9wKKpW1lgOhW48bXC
          claim_id: c_ldW1NwY_3q4YpJDzUbcGgL
          source_id: s_tNDproXMSfVB1nCM9DLLmB
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；端点按 CBDB ID 唯一映射。
          source:
            id: s_tNDproXMSfVB1nCM9DLLmB
            source_type: api_record
            title: 中国历代人物传记资料库：王源（CBDB 297162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297162&o=json
            external_identifier: CBDB:297162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1ACKLnuM8rd7xX3FtfoL2G
        status: active
        display_name: 王源
        merged_into_person_id: null
    - claim:
        id: c_M7Wf2Cc2r4hnGQuKLvCewR
        subject_person_id: p_UogPVB2nhkpP38jnhpw9oR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LrwY5tXkYCUNXA8ZrdXwSb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7JU5OvN4-trW7j-3TfcCx7
          claim_id: c_M7Wf2Cc2r4hnGQuKLvCewR
          source_id: s_3oZMV4SBRC34N3izp7CkEZ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3oZMV4SBRC34N3izp7CkEZ
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 297161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297161&o=json
            external_identifier: CBDB:297161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UogPVB2nhkpP38jnhpw9oR
        status: active
        display_name: 王和
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王維楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維楨 | accepted |
| birth.date | 1507年 | accepted |
| death.date | 1555年 | accepted |
| bio.summary | 王維楨（1507年—1555年），明人物。籍贯華州，身份为經世學者，入仕進士，曾任副使、祭酒。（中国历代人物传记资料库 CBDB 126791） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HxkU2fnETNPPrHRLTi3TtQ | 王載 | accepted |
| ancestors | p_1ACKLnuM8rd7xX3FtfoL2G | 王源 | accepted |
| ancestors | p_UogPVB2nhkpP38jnhpw9oR | 王和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王和（CBDB 297161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297161&o=json)
- [中国历代人物传记资料库：王維楨（CBDB 126791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126791&o=json)
- [中国历代人物传记资料库：王源（CBDB 297162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297162&o=json)
- [中国历代人物传记资料库：王載（CBDB 297163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297163&o=json)
